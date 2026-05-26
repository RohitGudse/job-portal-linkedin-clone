import React from "react";

const JobStatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4">
      <div className="text-4xl">{icon}</div>

      <div>
        <h2 className="text-gray-500 text-sm">{title}</h2>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default JobStatsCard;