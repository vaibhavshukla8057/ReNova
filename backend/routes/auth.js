// GET /api/auth - Example authentication status endpoint
// exports.handleGetAuth = (req, res) => {
//   res.json({ message: "Auth status fetched!" });
// };

// // POST /api/auth - Example login endpoint
// exports.handleLogin = (req, res) => {
//   // You can access req.body for login credentials
//   res.json({ message: "Login successful!" });
// };


import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// --- REGISTER A NEW USER ---
router.post('/register', async (req, res) => {
  const { name , email, password, role , mobile } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    const user = new User({ name ,email, password, role , mobile });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// --- LOGIN A USER ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // JWT Token banayein
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "YOUR_JWT_SECRET_KEY", // Ek secret key rakhein
      { expiresIn: '1d' } // Token 1 din mein expire ho jaayega
    );

    res.json({ message: "Logged in successfully!", token, user: { id: user._id, email: user.email, role: user.role ,  mobile: user.mobile } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;