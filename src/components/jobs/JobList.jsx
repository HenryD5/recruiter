import { JobCard } from "./JobCard";
import { JobTags } from "./JobTags";

export const JobList = () => {
  return (
    <div className="container mx-auto px-5 py-6">
      <div className="text-center my-6">
        <h2 className="text-4xl lg:text-6xl font-medium my-6 pt-8">Find your dream job</h2>
        <h6 className="text-lg lg:text-2xl my-5">
          Our Team moves faster, keeping you current on what’s hot
        </h6>
      </div>
      <div>
        <div>
          <JobTags />
        </div>
        <div className="grid lg:grid-cols-4 gap-3 pt-3 pb-12">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};
