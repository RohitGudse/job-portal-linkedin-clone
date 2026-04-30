import { useEffect, useState } from "react";
import { getJobs } from "../services/api";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div>
      <Navbar />
      <JobList jobs={jobs} />
    </div>
  );
}
