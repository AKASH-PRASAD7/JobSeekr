const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./utils/DbConnect.js");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const job = require("./api/job.js");
const applicant = require("./api/applicant.js");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("JobSeekr Server is running");
});

app.listen(port, async () => {
  try {
    await dbConnect();
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(`Faild to connect to database: ${err}`);
  }
});

//Routing
app.use("/job", job);
app.use("/applicant", applicant);

app.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
