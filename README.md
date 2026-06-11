# 🚀 Task Management Application

A full-stack Task Management Application built using **Node.js, Express.js, MongoDB, JWT Authentication, HTML, CSS, and JavaScript**.

It allows users to securely register, log in, and manage their daily tasks with a clean and responsive interface.

---

## 🌐 Live Demo

🔗 Frontend: https://taskmangements.netlify.app/  
🔗 Backend API: https://task-management-application-yj88.onrender.com  

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- Secure password hashing (bcryptjs)
- JWT-based authentication
- Protected routes

### 📋 Task Management
- Create tasks
- View all tasks
- Update tasks
- Mark tasks as completed
- Delete tasks
- User-specific task storage

### 🎨 UI/UX
- Responsive design
- Mobile-friendly layout
- Clean and simple interface
- Real-time updates after actions

---

## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript (Vanilla JS)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB Atlas
- Mongoose

**Authentication:**
- JWT (JSON Web Token)
- bcryptjs

**Deployment:**
- Netlify (Frontend)
- Render (Backend)

---

## 📂 Project Structure


task-management-app/

├── models/

│   ├── user.js

│   └── task.js

├── routes/

│   ├── authRoutes.js

│   └── taskRoutes.js

├── middleware/

│   └── authMiddleware.js

├── public/

│   ├── index.html

│   ├── style.css

│   └── script.js

├── .env

├── package.json

├── server.js

└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/poojasripopuri548-max/task-management-app.git
cd task-management-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Start Application

```bash
npm start
```

or

```bash
npm run dev
```

### 5. Open Browser

```text
http://localhost:5000
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Tasks

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get All Tasks |
| POST   | /api/tasks     | Create Task   |
| PUT    | /api/tasks/:id | Update Task   |
| DELETE | /api/tasks/:id | Delete Task   |

---

## 🎯 Learning Outcomes

This project helped in understanding:

* Full Stack Application Development
* REST API Design
* MongoDB Database Operations
* JWT Authentication & Authorization
* CRUD Operations
* Frontend & Backend Integration
* Deployment using Netlify and Render
* Git & GitHub Version Control

---

## 📸 Screenshots

Add screenshots here after uploading:

* Registration Page
* Login Page
* Dashboard
* Task List

---

## 👩‍💻 Author

**Pooja Sri**

GitHub: https://github.com/poojasripopuri548-max

---

## ⭐ Acknowledgement

Developed as part of a Full Stack Development Internship Assignment to demonstrate authentication, database integration, API development, and task management functionality.
