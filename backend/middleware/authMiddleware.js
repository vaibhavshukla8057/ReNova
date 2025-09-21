import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Header se token nikalein (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Token ko verify karein
      const decoded = jwt.verify(token, "YOUR_JWT_SECRET_KEY");

      // User ki ID se user ko dhoondhein aur password hata kar request mein daal dein
      req.user = await User.findById(decoded.id).select('-password');
      next(); // Agle step par jaayein
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { protect };