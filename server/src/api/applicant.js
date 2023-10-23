const express = require("express");
const router = express.Router();
const applicant = require("../models/applicant.js");

/**
 * Route     /applicant
 * Des       Get all applicants
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", async (req, res) => {
  try {
    const applicants = await applicant.find();
    if (!applicants) {
      return res.status(404).json({ error: "Applicants not found" });
    }
    return res.status(200).json({ applicants });
  } catch (err) {
    console.log(err);
  }
});

/**
 * Route     /applicant:id
 * Des       Get a applicant by ID
 * Params    ID
 * Access    Public
 * Method    GET
 */

router.get("/:id", async (req, res) => {
  try {
    const applicant = await applicant.findById(req.params.id);
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }
    return res.status(200).json({ applicant });
  } catch (err) {
    console.log(err);
  }
});

/**
 * Route     /
 * Des       Apply to a job
 * Params    none
 * Access    Public
 * Method    POST
 */

router.post("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    const { name, email, phone, resume, jobId } = req.body;

    const newApplicant = await applicant.create({
      name,
      email,
      phone,
      resume,
      appliedJobs: [{ jobId: jobId, ATS_SCORE: 7 }],
    });
    if (!newApplicant) {
      return res.status(400).json({ error: "Applicant not created" });
    }
    return res.status(201).json({ newApplicant });
  } catch (err) {
    console.log(err);
  }
});

router.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

module.exports = router;
