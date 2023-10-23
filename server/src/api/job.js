const express = require("express");
const router = express.Router();
const Job = require("../models/job");

/**
 * Route     /job
 * Des       Get all jobs
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    if (!jobs) {
      return res.status(404).json({ error: "Jobs not found" });
    }
    return res.status(200).json({ jobs });
  } catch (err) {
    console.log(err);
  }
});

/**
 * Route     /job:ID
 * Des       Get a job by ID
 * Params    ID
 * Access    Public
 * Method    GET
 */

router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    return res.status(200).json({ job });
  } catch (err) {
    console.log(err);
  }
});

/**
 * Route     /job
 * Des       Add a job
 * Params    ID
 * Access    Public
 * Method    POST
 */

router.post("/", async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    if (!newJob) {
      return res.status(400).json({ error: "Job not created" });
    }
    return res.status(201).json({ newJob });
  } catch (err) {
    console.log(err);
  }
});

router.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

module.exports = router;
