export const JobCard = ({ job }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px" }}>
    <h3>{job.title}</h3>
    <p>{job.body}</p>
  </div>
);