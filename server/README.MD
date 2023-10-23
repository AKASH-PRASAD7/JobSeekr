Here is an outline for an MVP to meet the requirements:

Backend:

Use Node.js and Express to build a REST API
Endpoints:
GET /jobs - get list of all jobs
GET /jobs/:id - get details of a single job
POST /jobs/:id/apply - apply for a job (save applicant info)
Use a database like MongoDB to store job info and applicant data
Document API using Swagger/OpenAPI
Frontend:

Use React to build the UI
Implement the following pages:
Jobs List Page - displays all jobs, links to Job Details page
Job Details Page - displays details of a single job, has apply button
Apply Form - form to apply for a job
Connect frontend to backend API
Database:

MongoDB to store:
Job listings (title, description, etc)
Applicant data (name, email, etc) when applying
Testing:

Jest for unit testing React components
SuperTest for API integration testing
Other:

Dockerize the app for easy local setup
Use best practices like modularity, separation of concerns, descriptive naming
Add Architecture Decision Records to document key decisions
For an initial MVP, this covers the core functionality. Further enhancements could include:

User authentication and accounts
Admin interface to manage job listings
Email notifications when applying for a job
Frontend state management with Redux
