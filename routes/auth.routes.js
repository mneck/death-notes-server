const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const router = express.Router();
const saltRounds = 10;

// POST  /auth/signup
router.post("/signup", (req, res, next) => {
  const { email, password } = req.body;
});

// Check if email or password is an empty string
if (email === "" || password === "") {
  res
    .status(400)
    .json({ message: "Provide email and password" });
  return;
}

// Validate email format with regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
if (!emailRegex.test(email)) {
  res
    .status(400)
    .json({ message: "Provide a valid email address." });
  return;
}

// Validate password format with regex
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if (!passwordRegex.test(password)) {
  res.status(400).json({
    message:
      "Password must have at least 6 characters and contain at least one number, one lowercase letter, and one uppercase letter.",
  });
  return;
}

// Check the users collection if a user with the same email already exists
User.findOne({ email })
  .then((foundUser) => {
    // If the user with the same email already exists, send an error response
    if (foundUser) {
      res
        .status(400)
        .json({ message: "User already exists." });
      return;
    }

    // If the email is unique, proceed to hash the password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user in the database
    return User.create({ email, password });
  })
  .then((createdUser) => {
    const { email, _id } = createdUser;
    const user = { email, _id };
    res.status(201).json({ user: user });
  })
  .catch((err) => {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internal Server Error" });
  });

// POST  /auth/login
// ...

// GET  /auth/verify
// ...

module.exports = router;
