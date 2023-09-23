import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProjectProps, UserProps } from '@/types';
import { createHash } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import prisma from './prisma';

export interface Session {
  user: {
    email: string;
    id: string;
    name: string;
  };
}

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  return (await getServerSession(req, res, authOptions)) as Session;
}

export const hashToken = (token: string) => {
  return createHash('sha256')
    .update(`${token}${process.env.NEXTAUTH_SECRET}`)
    .digest('hex');
};

interface WithProjectNextApiHandler {
  (
    req: NextApiRequest,
    res: NextApiResponse,
    project: ProjectProps,
    session: Session,
  ): any;
}

const withProjectAuth =
  (
    handler: WithProjectNextApiHandler,
    {
      excludeGet, // if the action doesn't need to be gated for GET requests
      requiredRole = ['owner', 'member'],
    }: {
      excludeGet?: boolean;
      requiredRole?: Array<'owner' | 'member'>;
    } = {},
  ) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    if (!session?.user.id)
      return res.status(401).end('Unauthorized: Login required.');

    const { slug } = req.query;
    if (!slug || typeof slug !== 'string') {
      return res.status(400).end('Missing or misconfigured project slug.');
    }

    const project = (await prisma.project.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        logo: true,
        createdAt: true,
        users: {
          where: {
            userId: session.user.id,
          },
          select: {
            role: true,
          },
        },
        tasks: true,
      },
    })) as ProjectProps;

    if (project && project.users) {
      // project exists but user is not part of it
      if (project.users.length === 0) {
        const pendingInvites = await prisma.projectInvite.findUnique({
          where: {
            email_projectId: {
              email: session.user.email,
              projectId: project.id,
            },
          },
          select: {
            expires: true,
          },
        });
        if (!pendingInvites) {
          return res.status(404).end('Project not found.');
        } else if (pendingInvites.expires < new Date()) {
          return res.status(410).end('Project invite expired.');
        } else {
          return res.status(409).end('Project invite pending.');
        }
      }
    } else {
      // project doesn't exist
      return res.status(404).end('Project not found.');
    }

    // if the action doesn't need to be gated for GET requests, return handler now
    if (req.method === 'GET' && excludeGet) {
      return handler(req, res, project, session);
    }

    if (
      !requiredRole.includes(project.users[0].role) &&
      // removing self from project should be allowed (DELETE /api/projects/[slug]/users?userId=...)
      !(
        req.url === `/api/projects/${slug}/users?userId=${session.user.id}` &&
        req.method === 'DELETE'
      )
    ) {
      return res.status(403).end('Unauthorized: Insufficient permissions.');
    }

    return handler(req, res, project, session);
  };

export { withProjectAuth };

interface WithUsertNextApiHandler {
  (
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session,
    user?: UserProps,
  ): any;
}

const withUserAuth =
  (
    handler: WithUsertNextApiHandler,
    {
      needUserDetails, // if the action needs the user's details
    }: {
      needUserDetails?: boolean;
    } = {},
  ) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    if (!session?.user.id)
      return res.status(401).end('Unauthorized: Login required.');

    if (req.method === 'GET') return handler(req, res, session);

    if (needUserDetails) {
      const user = (await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      })) as UserProps;

      return handler(req, res, session, user);
    }

    return handler(req, res, session);
  };

export { withUserAuth };
