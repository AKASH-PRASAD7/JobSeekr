import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const JobCard = ({ title, location, salary, skills, experienceLevel }) => {
  return (
    <>
      <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-xl m-4 cursor-pointer p-4 ">
        <h2 className="text-lg font-medium mb-2">{title}</h2>

        <div className="text-gray-600">
          <div className="flex gap-2 ">
            <FaLocationDot className="mt-1 text-red-500" /> {location}
          </div>
          <div>Salary: ${salary}</div>
          <div>Experience Level: {experienceLevel}</div>
          <div className="flex gap-2 flex-wrap mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-cyan-400 text-white font-semibold px-2 py-1 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
