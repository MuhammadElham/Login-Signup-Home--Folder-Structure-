const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const path = require("path");

// Signup Route
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../template/signup.html"));
});

// Login Route
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../template/login.html"));
});

// Handle Signup Post request
router.post("/signup", authController.signup);

// Handle Login Post request
router.post("/login", authController.login);

module.exports = router;
