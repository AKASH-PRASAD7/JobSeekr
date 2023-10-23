import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobById } from "../../redux/job/action";
import Loader from "../common/Loader";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const index = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { job, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getJobById(id));
  }, [id]);

  return (
    <section className="h-screen">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : job ? (
        <div className="max-w-2xl mx-auto p-4">
          <div className="bg-white shadow p-4 rounded">
            <h1 className="text-5xl font-bold mb-6">{job?.job?.title}</h1>

            <div className="text-gray-600 mb-4">
              <div className="flex gap-2 ">
                <FaLocationDot className="mt-1 text-red-500" />{" "}
                {job?.job?.location}
              </div>
              <div>{`Salary: $${job?.job?.salary}`}</div>
              <div>{`Experience Level: ${job?.job?.experienceLevel}`}</div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {job?.job?.description}
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {job?.job?.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-cyan-400 text-white font-semibold px-2 py-1 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <Link to={`/apply/${id}`}>
            <button className="bg-lime-500 hover:bg-lime-600 font-semibold text-white px-4 py-2 rounded-full mt-4">
              Apply Now
            </button>
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default index;
