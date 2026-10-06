import React from "react";

import JobStatsCard from "../components/dashboard/JobStatsCard";
import ActivityFeed from "../components/dashboard/ActivityFeed";

const Dashboard = () => {
  const jobStats = {
    title: "Total Jobs",
    count: 120,
    icon: "💼",
  };

  return (
    <main className="grid gap-5">
      <JobStatsCard {...jobStats} />

      <ActivityFeed />
    </main>
  );
};

export default Dashboard;