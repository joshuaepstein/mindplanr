'use server';

import prisma from '@/lib/prisma';

export async function getProject(projectSlug: string) {
  const project = await prisma.project.findUnique({
    where: {
      slug: projectSlug,
    },
  });

  return project;
}

export async function getTasks(projectId: string) {
  const tasks = await prisma.task.findMany({
    where: {
      projectId,
    },
  });

  return tasks;
}
