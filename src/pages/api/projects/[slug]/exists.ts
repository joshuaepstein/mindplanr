import { withUserAuth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default withUserAuth(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query as { slug: string };

    // GET /api/projects/[slug]/exists – check if a project exists
    if (req.method === 'GET') {
      const project = await prisma.project.findUnique({
        where: {
          slug,
        },
        select: {
          slug: true,
        },
      });
      if (project) {
        return res.status(200).json(1);
      } else {
        return res.status(200).json(0);
      }
    } else {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  },
);
