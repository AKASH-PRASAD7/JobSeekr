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
 * Route     /:search
 * Des       Search Job
 * Params    SearchQuery
 * Access    Public
 * Method    GET
 */

router.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query;

    const jobs = await Job.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { skills: { $in: [query] } },
      ],
    });

    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error searching jobs" });
  }
});

/**
 * Route     /filter/query
 * Des       Filter Jobs
 * Params    none
 * Access    Public
 * Method    GET
 */

// filter/query?skills=JavaScript,React&experienceLevel=Mid

router.get("/filter/query", async (req, res) => {
  try {
    const { skills, experienceLevel } = req.query;

    const query = {};

    if (skills) {
      query.skills = { $in: skills.split(",") };
    }

    if (experienceLevel) {
      query.experienceLevel = experienceLevel;
    }

    const filteredJobs = await Job.find(query);

    return res.status(200).json(filteredJobs);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
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
