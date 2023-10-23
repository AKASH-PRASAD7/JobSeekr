import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/job/action";
import Loader from "../common/Loader";
const job = {
  title: "Software Developer",
  description:
    "Join our team as a software developer and contribute to the development of cutting-edge applications. You will work on coding, testing, and debugging software while collaborating with other developers and stakeholders.",
  location: "San Francisco, CA",
  salary: 90000,
  skills: ["Java", "Spring Boot", "JavaScript", "React", "API Development"],
  experienceLevel: "Senior",
};

const Joblist = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.job);
  console.log(jobs);
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          jobs.jobs &&
          jobs.jobs.map((job) => (
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
