import React from "react";

const RecruiterDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-xl shadow">
        Total Jobs: 12
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        Applications: 340
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        Interviews: 25
      </div>
    </div>
  );
};

export default RecruiterDashboard;