import React from "react";

const index = ({ job }) => {
  return (
    <section>
      <div className="max-w-2xl mx-auto p-4">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded">
          Apply Now
        </button>

        <div className="bg-white shadow p-4 rounded mt-4">
          <h1 className="text-2xl font-bold mb-2">{job.title}</h1>

          <div className="text-gray-600 mb-4">
            <div>{job.location}</div>
            <div>{job.salary}</div>
            <div>{job.experienceLevel}</div>
          </div>

          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>
      </div>
    </section>
  );
};

export default index;
