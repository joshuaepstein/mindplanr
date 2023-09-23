import { DashboardLayout } from '@/components/layout/app';
import { H3, Subtle } from '@mindplanr/ui/typography';
import { notFound } from 'next/navigation';
import { getProject, getTasks } from './action';

export default async function ProjectDashboard({
  params: { project: projectSlug },
}: {
  params: {
    project: string;
  };
}) {
  const project = await getProject(projectSlug);

  if (!project) {
    notFound();
  }

  const tasks = await getTasks(project.id);

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col">
          <H3>Tasks</H3>
          {(tasks &&
            tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <div key={task.id}>
                  <p>{task.name}</p>
                </div>
              );
            })) || (
            <div className="mt-3">
              <Subtle>No tasks found.</Subtle>
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
}
