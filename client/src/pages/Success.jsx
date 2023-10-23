import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const SuccessPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-4 h-screen">
        <div className="bg-white shadow p-4 rounded text-center">
          <h2 className="text-4xl font-bold mb-8">Thank You for Applying!</h2>
          <p className="text-gray-700 mb-4">
            Your application has been submitted successfully.
          </p>
          <Link
            to="/"
            className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600"
          >
            More Jobs
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
