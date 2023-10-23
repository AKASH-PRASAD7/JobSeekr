const express = require("express");
const router = express.Router();
const applicant = require("../models/applicant.js");

/**
 * Route     /applicant
 * Des       Create/Register a user/applicant
 * Params    none
 * Access    Public
 * Method    POST
 */

router.post("/", async (req, res) => {
  try {
    const newApplicant = await applicant.create(req.body);
    if (!newApplicant) {
      return res.status(400).json({ error: "Applicant not created" });
    }
    return res.status(201).json({ newApplicant });
  } catch (err) {
    console.log(err);
  }
});

/**
 * Route     /applicant
 * Des       Create/Register a user/applicant
 * Params    none
 * Access    Public
 * Method    POST
 */

router.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

module.exports = router;
