const express = require("express");
const router = express.Router();
const path = require("path");

// Home Page Route
router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../../template/home.html"));
});

module.exports = router;
