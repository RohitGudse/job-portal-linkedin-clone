import React from "react";

const applicants = [
  {
    name: "Rohit",
    role: "Frontend Developer",
  },
  {
    name: "Aman",
    role: "Backend Developer",
  },
];

const RecentApplicants = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="font-bold mb-4">Recent Applicants</h2>

      {applicants.map((applicant, index) => (
        <div
          key={index}
          className="border-b py-2"
        >
          <p className="font-semibold">{applicant.name}</p>
          <p className="text-gray-500 text-sm">
            {applicant.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentApplicants;