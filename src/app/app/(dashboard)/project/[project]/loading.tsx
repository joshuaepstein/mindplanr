import { DashboardLayout } from '@/components/layout/app';
import LoadingCircle from '@/components/shared/icons/loading-circle';

export default function LoadingProjectPage() {
  return (
    <>
      <DashboardLayout>
        <LoadingCircle />
      </DashboardLayout>
    </>
  );
}
