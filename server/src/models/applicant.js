const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
  },

  resume: {
    type: String,
  },

  appliedJobs: [
    {
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      ATS_SCORE: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("Applicant", applicantSchema);
