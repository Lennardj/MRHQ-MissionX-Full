// Module imports
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

//Enable Express
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// Database config
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/api/studentdash", (req, res) => {
  console.log("/api/studentdash endpoint was hit!");
  pool.query(
    "SELECT name, video FROM missio20_team5.project WHERE project_id = 2;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/api/instrcution", (req, res) => {
  console.log("/api/instruction endpoint was hit!");
  pool.query(
    "SELECT instructions FROM missio20_team5.project WHERE project_id = 2;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// Profile page Info Card.
app.get("/profile", (req, res) => {
  pool.query(
    "SELECT student.student_id, teacher.teacher_id, teacher.name AS teacherName, student.name, student.school,student.email, student.profile_pic,student.date_of_birth,student.course, student.contact_number FROM student INNER JOIN teacher on student.teacher_id = teacher.teacher_id WHERE student_id = 2;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// Project page
app.get("/project", (req, res) => {
  pool.query("SELECT * FROM project", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// sorting projects by Beginner
app.get("/sortBeginner", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'beginner'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// sorting projects by Intermediate
app.get("/sortIntermediate", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'intermediate'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

//   sorting projects by Advance
app.get("/sortAdvance", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE course = 'advance'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
// Sorting by Free
app.get("/sortFree", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE subscription = 'Free'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// sorting by Premium
app.get("/sortPremium", (req, res) => {
  pool.query(
    "SELECT * FROM project WHERE subscription = 'Premium'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// ---------------------------- STUDENT LOGIN ENDPOINT ----------------------------
// ---------------------------- STUDENT LOGIN ENDPOINT ----------------------------
// ---------------------------- STUDENT LOGIN ENDPOINT ----------------------------
// ---------------------------- STUDENT LOGIN ENDPOINT ----------------------------
app.post("/home/authentication/student/login", (req, res) => {
  console.log("/home/authentication/student/login ENDPOINT was hit!");
  console.log(req.body.email);
  pool.execute(
    `SELECT name FROM missio20_team5.student WHERE email = ? AND password = ?;`,
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) return console.log(err);

      if (result.length === 0) {
        console.log("Incorrect Credentials");
        res.sendStatus(401);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
});

// ---------------------------- STUDENT SIGN UP ENDPOINT -----------------------------
// ---------------------------- STUDENT SIGN UP ENDPOINT -----------------------------
// ---------------------------- STUDENT SIGN UP ENDPOINT -----------------------------
// ---------------------------- STUDENT SIGN UP ENDPOINT -----------------------------
app.post("/home/authentication/student/signup", (req, res) => {
  console.log("/home/authentication/student/signup ENDPOINT was hit!");
  console.log(req.body);
  pool.execute(
    `INSERT INTO student (name, email, password, teacher_id) VALUES (?, ?, ?, 1);`,
    [req.body.fullName, req.body.email, req.body.password],
    (err, result) => {
      if (err) return console.log(err);

      if (result.length === 0) {
        console.log("input error");
        res.sendStatus(401);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
});

// ---------------------------- TEACHER LOGIN ENDPOINT ----------------------------
// ---------------------------- TEACHER LOGIN ENDPOINT ----------------------------
// ---------------------------- TEACHER LOGIN ENDPOINT ----------------------------
// ---------------------------- TEACHER LOGIN ENDPOINT ----------------------------
app.post("/home/authentication/teacher/login", (req, res) => {
  console.log("/home/authentication/teacher/login ENDPOINT was hit!");
  console.log(req.body.email);
  pool.execute(
    `SELECT name FROM missio20_team5.teacher WHERE email = ? AND password = ?;`,
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) return console.log(err);

      if (result.length === 0) {
        console.log("Error");
        res.sendStatus(401);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
});

// ---------------------------- TEACHER SIGNUP ENDPOINT ----------------------------
// ---------------------------- TEACHER SIGNUP ENDPOINT ----------------------------
// ---------------------------- TEACHER SIGNUP ENDPOINT ----------------------------
// ---------------------------- TEACHER SIGNUP ENDPOINT ----------------------------
app.post("/home/authentication/teacher/signup", (req, res) => {
  console.log("/home/authentication/teacher/signup ENDPOINT was hit!");
  console.log(req.body);
  pool.execute(
    `INSERT INTO missio20_team5.teacher (name, email, password) VALUES (?, ?, ?);`,
    [req.body.fullName, req.body.email, req.body.password],
    (err, result) => {
      if (err) return console.log(err);

      if (result.length === 0) {
        console.log("input error");
        res.sendStatus(401);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
