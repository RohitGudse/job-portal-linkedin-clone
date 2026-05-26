import React from "react";

const ActivityFeed = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="font-bold mb-4">
        Activity Feed
      </h2>

      <ul>
        <li>User applied for React Job</li>
        <li>New company added</li>
        <li>Profile updated</li>
      </ul>
    </div>
  );
};

export default ActivityFeed;