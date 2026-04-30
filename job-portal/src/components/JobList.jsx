export const JobList = ({ jobs }) => (
  <div>
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
);