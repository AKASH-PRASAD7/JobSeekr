# JobSeekr API Documentation (https://documenter.getpostman.com/view/23950566/2s9YRCXrF1)

## Applicants API

### Get all Applicants

- **Route**: `/applicant`
- **Description**: Get a list of all applicants.
- **Method**: GET
- **Access**: Public
- **Parameters**: None

### Get an Applicant by ID

- **Route**: `/applicant/:id`
- **Description**: Get an applicant by their unique ID.
- **Method**: GET
- **Access**: Public
- **Parameters**:
  - `id` (string): The unique ID of the applicant.

### Apply to a Job

- **Route**: `/applicant`
- **Description**: Apply to a job by submitting applicant details.
- **Method**: POST
- **Access**: Public
- **Parameters**: None
- **Request Body**:
  - `name` (string): The name of the applicant.
  - `email` (string): The email address of the applicant.
  - `phone` (string): The phone number of the applicant.
  - `resume` (string): The resume or CV of the applicant.
  - `jobId` (string): The ID of the job to which the applicant is applying.
- **Response**:
  - If successful, returns the newly created applicant.

## Jobs API

### Get all Jobs

- **Route**: `/job`
- **Description**: Get a list of all job listings.
- **Method**: GET
- **Access**: Public
- **Parameters**: None

### Get a Job by ID

- **Route**: `/job/:id`
- **Description**: Get a job listing by its unique ID.
- **Method**: GET
- **Access**: Public
- **Parameters**:
  - `id` (string): The unique ID of the job.

### Search Jobs

- **Route**: `/job/search/:query`
- **Description**: Search for job listings based on a search query.
- **Method**: GET
- **Access**: Public
- **Parameters**:
  - `query` (string): The search query.

### Filter Jobs

- **Route**: `/job/filter/query`
- **Description**: Filter job listings based on skills and experience level.
- **Method**: GET
- **Access**: Public
- **Parameters**: None
- **Query Parameters**:
  - `skills` (string): Comma-separated skills for filtering.
  - `experienceLevel` (string): The experience level for filtering.
- **Response**:
  - Returns a list of jobs matching the filter criteria.

### Add a Job

- **Route**: `/job`
- **Description**: Add a new job listing.
- **Method**: POST
- **Access**: Public
- **Parameters**: None
- **Request Body**: JSON object representing the job details.
- **Response**:
  - If successful, returns the newly created job listing.

---
