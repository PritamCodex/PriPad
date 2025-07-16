# 📝 PriPad - Public Notes Sharing Platform

PriPad is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to write and publish public notes. Anyone can view notes shared by others, making it a simple and open platform for collaborative note sharing.

---

## 🌐 Live Website

👉 [[Click here to visit the live site]([)) ](https://your-live-site-link.com](https://pripad.onrender.com/) 

---

## ✨ Features

- 🚀 Add and publish notes in real-time
- 🌍 View public notes shared by others
- 🌐 Common shared database using MongoDB
- ⚙️ Rate limiter to prevent spam/abuse
- 🧼 Clean UI powered by React and Tailwind CSS
- ⚡ Fast and lightweight API with Express.js

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Database     | Other Tools        |
|----------------|-----------------|--------------|--------------------|
| React.js       | Node.js         | MongoDB Atlas| Express.js         |
| Vite           | RESTful API     | Mongoose     | React Hot Toast    |
| Tailwind CSS   | Rate Limiting   |              | Git & GitHub       |

---

## 📸 Screenshots

<img width="1767" height="887" alt="image" src="https://github.com/user-attachments/assets/fa8989e1-71b9-4b74-9161-19a763a93793" />
<img width="1164" height="806" alt="image" src="https://github.com/user-attachments/assets/fe6c4a27-7ade-4aef-a958-7b7fbb85730b" />
<img width="1510" height="767" alt="image" src="https://github.com/user-attachments/assets/399cdc2f-026f-4ab5-a2d2-df75a2bc8bf7" />




---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Redis for Limiter

### Clone the repo

```bash
git clone https://github.com/PritamCodex/PriPad.git
cd PriPad
```

---

## ✅ What You Should Replace

- Replace `[https://your-live-site-link.com](https://pripad.onrender.com/)` with your actual deployed frontend URL.


## 🔐 Environment Variables
Create a .env file in the /backend folder:(env)
```bash
PORT=5001
MONGODB_URI=your_mongodb_atlas_connection_string
```

## 🧐 API Endpoints
Method	Endpoint	Description
```bash
GET	/api/notes	#Getallnotes
POST	/api/notes	#Create a new note
PUT	/api/notes/:id	#Update a note
DELETE	/api/notes/:id	#Delete a note
```

## 📦 Deployment

```bash
Frontend: render.com
Backend: render.com
Database: MongoDB Atlas
```

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

## 🖥️ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

## 👨‍💻 Author
Pritam Codex
🔗 [GitHub](https://github.com/PritamCodex)
