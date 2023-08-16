import { JobList } from "../components/jobs/JobList";
import { AppLayout } from "../layout/AppLayout";

import { useGetData } from "../hooks/useGetData";

export const JobsPage = () => {

  const { responseData } = useGetData()

  console.log('responseData', responseData)

  return (
    <>
      <AppLayout>
        <JobList positions={responseData} />
      </AppLayout>
    </>
  );
};
