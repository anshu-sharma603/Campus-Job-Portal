Campus Job Portal

A full-stack MERN (MongoDB, Express, React, Node.js) job portal that connects students with companies for campus placements. Students can browse and apply to job postings, while companies/recruiters can post jobs and manage applicants.

🚀 Features
Authentication — Register/login for both students and recruiters
Job Postings — Recruiters can create, update, and manage job listings
Company Management — Register and manage company profiles
Job Applications — Students can apply to jobs and track application status
Applicant Tracking — Recruiters can view and manage applicants for each job
Responsive UI — Built with Tailwind CSS and shadcn/ui components
🛠️ Tech Stack

Frontend

React (Vite)
Tailwind CSS v4
shadcn/ui (Radix/Base UI based components)
React Router DOM

Backend

Node.js + Express.js
MongoDB with Mongoose
JWT-based authentication
📂 Project Structure
Campus-Job-Portal/
├── backend/
│   ├── controllers/
│   │   ├── application.controllers.js
│   │   ├── company.controllers.js
│   │   ├── job.controller.js
│   │   └── user.controllers.js
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── index.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ui/
    │   │       ├── shared/
    │   │       │   └── Navbar.jsx
    │   │       ├── button.jsx
    │   │       ├── avatar.jsx
    │   │       └── popover.jsx
    │   ├── lib/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── vite.config.js
    ├── jsconfig.json
    └── components.json
⚙️ Getting Started
Prerequisites
Node.js installed
MongoDB (local or Atlas connection string)
Backend Setup
bash
cd backend
npm install

Create a .env file in the backend folder with:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the backend server:

bash
npm run dev
Frontend Setup
bash
cd frontend
npm install
npm run dev

The frontend will run on http://localhost:5173/ and the backend on http://localhost:8000/ (or your configured port).

📌 API Overview
Endpoint	Method	Description
/api/v1/user/register	POST	Register a new user
/api/v1/user/login	POST	Login user
/api/v1/company/register	POST	Register a new company
/api/v1/job/post	POST	Post a new job
/api/v1/job/get	GET	Get all jobs
/api/v1/application/apply/:id	GET	Apply for a job
/api/v1/application/get	GET	Get applied jobs (student)
/api/v1/application/:id/applicants	GET	Get applicants for a job (recruiter)
🗺️ Roadmap
 AI-based resume–job description matching (v2)
 Deployment (Vercel/Render)
 Notifications for application status updates
👤 Author

Anshu Sharma

GitHub: @anshu-sharma603
LinkedIn: anshu-sharma
Content
