const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/departments", (req, res) => {
  db.query("SELECT * FROM DEPARTMENT", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get courses
app.get("/courses", (req, res) => {
  const sql = "SELECT * FROM Course";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Get instructors
app.get("/instructors", (req, res) => {
  const sql = "SELECT * FROM Instructor";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Get sections
app.get("/sections", (req, res) => {
  const sql = "SELECT * FROM Section";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
