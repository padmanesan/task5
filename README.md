# task5
# 🎓 LMS Dashboard – Full Authentication System

A full-stack **Learning Management System (LMS)** dashboard built using  
**React (Vite)**, **Node.js**, **Express**, and **MongoDB**, featuring  
**JWT authentication**, **role-based access**, and a **professional dashboard UI**.

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes
- Logout functionality

### 👤 User Roles
- Student role
- Admin role
- Role-based sidebar navigation
- Admin-only dashboard access

### 📊 Dashboard
- Professional LMS dashboard UI
- User profile display
- Learning progress charts (Recharts)
- Loading animations
- Sidebar navigation with icons

### 📚 Course Management
- Admin can add, view, and delete courses
- Courses fetched dynamically from backend
- MongoDB data persistence

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Framer Motion
- Recharts
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## ⚙️ Project Structure

projecttask5/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── .env
│
├── frontend/
│ └── lms-dashboard/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
└── README.md

yaml
Copy code

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup
```bash
cd backend
npm install
npx nodemon server.js
Create .env file:

env
Copy code
MONGO_URI=mongodb://127.0.0.1:27017/lms_dashboard
JWT_SECRET=your_secret_key
2️⃣ Frontend Setup
bash
Copy code
cd frontend/lms-dashboard
npm install
npm run dev
Open:

arduino
Copy code
http://localhost:5173
🧪 API Endpoints
Auth
POST /auth/register

POST /auth/login

Courses
GET /courses

POST /courses

DELETE /courses/:id

📸 Screenshots

Login Page
<img width="1907" height="1077" alt="image" src="https://github.com/user-attachments/assets/674daf8e-f6eb-4b4f-ba48-96869fd36cfb" />


Register Page
<img width="1907" height="1077" alt="image" src="https://github.com/user-attachments/assets/4662868d-89d3-41b4-91f6-b9a2d62c69b4" />


Dashboard
<img width="1911" height="1050" alt="image" src="https://github.com/user-attachments/assets/8d425382-e3dc-4221-bec4-d1ec742a9c7d" />

Course Management
<img width="1917" height="1026" alt="image" src="https://github.com/user-attachments/assets/592e5f9c-aa8b-436b-b67d-57b7098779b8" />
