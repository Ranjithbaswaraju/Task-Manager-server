# Task Manager Application

## Project Overview

Task Manager Application is a full stack web application used to manage employee tasks inside an organization.  
The project helps Team Leads assign tasks to employees and track task progress efficiently.

This application provides secure authentication, task assignment, task tracking, and dashboard management for different users.

The system improves workflow management and helps teams organize daily tasks in a structured way.

---

# What This Project Does

- User Registration and Login
- Role Based Access
- Team Lead can create the Employees later provide credentials to employees
- Employees not have access to register just have access to the login and update task
- Team lead can fetch employees
- Team Lead can create and assign tasks
- Employees can view assigned tasks
- Employees can update task status
- Dashboard for Team Leads
- Dashboard for Employees
- Task tracking and management
- Secure authentication using JWT

---

# Roles in the Project

## 1. Team Lead (TL)
Team Lead can:
- Login
- Create tasks
- Assign tasks to employees
- View all tasks
- Monitor task progress

## 2. Employee
Employee can:
- Login
- View assigned tasks
- Update task status
- Track completed tasks

---

# Technologies Used

## Frontend
- React.js
- CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Token)

## Deployment Platforms
- Frontend : Vercel
- Backend : Render

---

# Database Used

## MongoDB

MongoDB is used to store:
- User details
- Employee details
- Team Lead details
- Task information
- Task status updates

---

# APIs Used

## Authentication APIs
- POST /api/auth/register
- POST /api/auth/login

## Team Lead APIs
- POST /api/tl/createTask
- GET /api/tl/allTasks

## Employee APIs
- GET /api/employee/myTasks
- PUT /api/employee/updateStatus/:id

## Task APIs
- POST /api/task/create
- GET /api/task/all
- DELETE /api/task/delete/:id

---

# Total API Count

8 APIs

---

# Backend Installation

## Step 1 : Open Backend Folder

```bash
cd server
```

## Step 2 : Install Dependencies

```bash
npm install
```

## Step 3 : Create .env File

Create a `.env` file inside backend folder and add:

```env
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_secret_key
PORT=3000
```

## Step 4 : Start Backend Server

```bash
npm start
```

Backend server will run on:

```bash
http://localhost:3000
```

---

# Frontend Installation

## Step 1 : Open Frontend Folder

```bash
cd client
```

## Step 2 : Install Dependencies

```bash
npm install
```

## Step 3 : Start Frontend

```bash
npm run dev
```

Frontend will run on:


http://localhost:5173




# Frontend Flow

## User Authentication Flow
1. User registers
2. User logs in
3. JWT token is generated
4. User is redirected to dashboard

---

## Team Lead Flow
1. Team Lead logs in
2. Creates Employees
2. Creates task
3. Assigns task to employee
4. Tracks employee progress

---

## Employee Flow
1. Employee logs in
2. Views assigned tasks
3. Updates task status
4. Marks task as completed


# Folder Structure sample

task-manager/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── server/
│   ├── Routes/
│   ├── Models/  
│   ├── Controllers/
│   ├── Middleware/
│   └── server.js
│
└── README.md

# Deployment

## Frontend Deployment
Frontend deployed using Vercel.

## Backend Deployment
Backend deployed using Render.

## Screens
## Register and login Screens

## Register Screen
<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 192513.png" />

## login Screen
<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 192522.png"> 

## Employee DashBoard

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 201700.png">

## Employee Task Screen

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 201739.png">

## TEAM LEAD DashBoard

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 202048.png">

## TEAM LEAD ADD EMPLOYEE

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 202139.png">

## TEAM LEAD MY TEAM

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 202111.png">

## TEAM LEAD TASK

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 202224.png">

## TEAM LEAD TASK

<img src="./TASK_MANAGER_SCREEN IMAGES/Screenshot 2026-05-22 202159.png">


