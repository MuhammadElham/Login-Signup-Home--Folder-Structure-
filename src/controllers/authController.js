const User = require("../models/User");

// Signup controller
const signup = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) return res.send("Invalid data");

    // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create new user
    const newUser = new User({ name, password });
    await newUser.save();

    // Redirect to login after successful signup
    res.redirect("/login");
  } catch (error) {
    res.status(500).send("Error during signup");
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) return res.send("Invalid login data");

    // Check if user exists
    const user = await User.findOne({ name });
    if (!user || user.password !== password) {
      return res.status(400).send("Invalid username or password");
    }

    // Redirect to home on successful login
    res.redirect("/home");
  } catch (error) {
    res.status(500).send("Error during login");
  }
};

module.exports = { signup, login };
