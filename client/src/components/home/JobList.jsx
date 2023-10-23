import React from "react";
import JobCard from "./JobCard";

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
  return (
    <section>
      <div>
        <JobCard
          title={"Software Developer"}
          salary={"30"}
          skills={[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "API Development",
          ]}
          location={"USA"}
          experienceLevel="Senior"
        />
        <JobCard
          title={"Software Developer"}
          salary={"30"}
          skills={[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "API Development",
          ]}
          location={"USA"}
          experienceLevel="Senior"
        />
        <JobCard
          title={"Software Developer"}
          salary={"30"}
          skills={[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "API Development",
          ]}
          location={"USA"}
          experienceLevel="Senior"
        />
        <JobCard
          title={"Software Developer"}
          salary={"30"}
          skills={[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "API Development",
          ]}
          location={"USA"}
          experienceLevel="Senior"
        />
        <JobCard
          title={"Software Developer"}
          salary={"30"}
          skills={[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "API Development",
          ]}
          location={"USA"}
          experienceLevel="Senior"
        />
      </div>
    </section>
  );
};

export default Joblist;
