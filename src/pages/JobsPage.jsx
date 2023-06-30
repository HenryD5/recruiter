import { JobList } from "../components/jobs/JobList";
import { AppLayout } from "../layout/AppLayout";

export const JobsPage = () => {
  return (
    <>
      <AppLayout>
        <JobList />
      </AppLayout>
    </>
  );
};
