import React from "react";

import JobStatsCard from "../components/dashboard/JobStatsCard";
import ActivityFeed from "../components/dashboard/ActivityFeed";

const Dashboard = () => {
  return (
    <div className="grid gap-5">
      <JobStatsCard
        title="Total Jobs"
        count="120"
        icon="💼"
      />

      <ActivityFeed />
    </div>
  );
};

export default Dashboard;