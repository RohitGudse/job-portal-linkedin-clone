import React from "react";

const JobFilterSidebar = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="font-bold mb-4">
        Filters
      </h2>

      <div className="mb-3">
        <label>Location</label>
        <input
          type="text"
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-3">
        <label>Experience</label>

        <select className="border p-2 w-full">
          <option>Fresher</option>
          <option>1+ Years</option>
          <option>3+ Years</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilterSidebar;