import { Session, withUserAuth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { validSlugRegex } from '@/lib/web';
import { NextApiRequest, NextApiResponse } from 'next';

export default withUserAuth(
  async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
    // GET /api/projects – get all projects associated with the authenticated user
    if (req.method === 'GET') {
      const response = await prisma.project.findMany({
        where: {
          users: {
            some: {
              userId: session.user.id,
            },
          },
        },
      });
      return res.status(200).json(response);

      // POST /api/projects – create a new project
    } else if (req.method === 'POST') {
      const { name, slug } = req.body;
      if (!name || !slug) {
        return res.status(422).json({ error: 'Missing name or slug' });
      }
      let slugError: string | null = null;

      // check if slug is too long
      if (slug.length > 48) {
        slugError = 'Slug must be less than 48 characters';

        // check if slug is valid
      } else if (!validSlugRegex.test(slug)) {
        slugError = 'Invalid slug';
      }

      if (slugError) {
        return res.status(422).json({
          slugError,
        });
      }
      const slugExist = await prisma.project.findUnique({
        where: {
          slug,
        },
        select: {
          slug: true,
        },
      });
      if (slugExist) {
        return res.status(422).json({
          slugError: slugExist ? 'Slug is already in use.' : null,
        });
      }
      const response = await prisma.project.create({
        data: {
          name,
          slug,
          users: {
            create: {
              userId: session.user.id,
              role: 'owner',
            },
          },
        },
      });

      return res.status(200).json(response);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  },
);
