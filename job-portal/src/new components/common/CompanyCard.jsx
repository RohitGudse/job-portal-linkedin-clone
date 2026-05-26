import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <img
        src={company.logo}
        alt=""
        className="w-16 h-16"
      />

      <h2 className="font-bold mt-2">
        {company.name}
      </h2>

      <p className="text-gray-500">
        {company.location}
      </p>
    </div>
  );
};

export default CompanyCard;