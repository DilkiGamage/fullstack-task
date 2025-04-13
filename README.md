# Landing Page

A landing page for the "Reimagine Banking with Finastra" event built using React, Tailwind CSS, Node.js, Express, and MySQL.

##  Features

- Responsive and modern UI with Tailwind CSS
- Smooth animations with AOS
- Contact form
- Backend API for data submission
- MySQL database integration

##  Technologies Used

- Frontend: React, Tailwind CSS, AOS
- Backend: Node.js, Express
- Database: MySQL

##  Setup Instructions

### 1. Frontend Setup
--bash
cd frontend
npm install
npm run dev


### 2. Backend Setup
--bash
cd backend
npm install
node index.js


### 3. MySQL Database Setup
--sql
CREATE DATABASE IF NOT EXISTS event_registration;

USE event_registration;

CREATE TABLE IF NOT EXISTS registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### 4. Test the App
- Go to `http://localhost:5173` to view the frontend
- Backend should be running on `http://localhost:5000`


---
