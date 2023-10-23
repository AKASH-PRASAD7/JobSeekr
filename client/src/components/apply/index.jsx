import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyJob } from "../../redux/job/action";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { applied, loading, error } = useSelector((state) => state.job);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "resume", //todo later
    jobId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = async (e) => {
    const file = formData.resume;

    // const pdfText = await convertPdfToString(file);

    // console.log(file);
  };
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    dispatch(applyJob(formData));

    applied && setSubmitting(false);
    navigate("/success");
  };

  return (
    <section className="h-screen">
      {" "}
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8">Apply </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-lime-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-lime-600 focus:outline-none"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default index;
