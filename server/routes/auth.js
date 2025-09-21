// routes/auth.js

// ... baaki imports (express, jwt, User)

const router = express.Router();

// --- REGISTER A NEW USER (UPDATED LOGIC) ---
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Naya user banayein aur save karein
    const user = new User({ email, password, role });
    await user.save();

    // --- NAYA LOGIC: SIGNUP KE BAAD TOKEN GENERATE KAREIN ---
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "YOUR_JWT_SECRET_KEY", // Yahaan wahi secret key use karein jo login mein hai
      { expiresIn: '1d' }
    );
    // ----------------------------------------------------

    // Response mein success message ke saath token bhi bhejein
    res.status(201).json({ 
        message: "User registered successfully!", 
        token, 
        user: { id: user._id, email: user.email, role: user.role } 
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// --- LOGIN A USER (Yeh waise ka waisa hi rahega) ---
router.post('/login', async (req, res) => {
    // ... login ka logic jaisa tha waisa hi
});

export default router;