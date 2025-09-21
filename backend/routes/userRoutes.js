import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import User from '../models/user.js';

const router = express.Router();

// GET USER PROFILE
// Endpoint: GET /api/users/profile
router.get('/profile', protect, async (req, res) => {
  // protect middleware se humein req.user mil jaata hai
  const user = await User.findById(req.user._id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// UPDATE USER PROFILE
// Endpoint: PUT /api/users/profile
router.put('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.mobile = req.body.mobile || user.mobile;
    
    const updatedUser = await user.save();
    
    res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        mobile: updatedUser.mobile,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default router;