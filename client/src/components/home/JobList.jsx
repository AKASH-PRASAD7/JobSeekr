import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/job/action";
import Loader from "../common/Loader";

const Joblist = () => {
  const dispatch = useDispatch();
  //state
  const { jobs, loading, error, search_jobs } = useSelector(
    (state) => state.job
  );

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  if (error) {
    return <h1 className="text-red-500">{error}</h1>;
  }

  let data = [];

  if (search_jobs.length > 0) {
    data = search_jobs;
  } else {
    data = jobs.jobs;
  }

  return (
    <section>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          data &&
          data.map((job) => (
            <JobCard
              title={job.title}
              salary={job.salary}
              skills={job.skills}
              location={job.location}
              experienceLevel={job.experienceLevel}
              id={job._id}
              key={job._id}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Joblist;
