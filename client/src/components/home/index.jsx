import React from "react";
import Hero from "./Hero";
import JobFilter from "./JobFilter";
import Footer from "../common/Footer";

const index = () => {
  return (
    <section className="h-screen">
      <Hero />
      <JobFilter />
      <Footer />
    </section>
  );
};

export default index;
