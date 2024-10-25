const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// Import routes
const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

// Use the routes
app.use("/", authRoutes); // Signup and Login routes
app.use("/", homeRoutes); // Home route

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/signups")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connect failed!", err));

// Start the server
const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is Running at Port = ${Port}`);
});
