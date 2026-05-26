import React, { useState } from "react";

const SavedJobs = () => {
  const [saved, setSaved] = useState([]);

  const saveJob = (job) => {
    setSaved([...saved, job]);
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h2 className="font-bold mb-4">Saved Jobs</h2>

      <button
        onClick={() => saveJob("React Developer")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Job
      </button>

      <ul className="mt-4">
        {saved.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobs;