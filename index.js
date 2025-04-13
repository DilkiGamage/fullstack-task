const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dilki3636#",
  database: "event_registration"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL DB");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO registrations (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Registration saved successfully");
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});