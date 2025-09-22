import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Order from '../models/Order.js';

const router = express.Router();

// Naya order create karein
// Endpoint: POST /api/orders
router.post('/', protect, async (req, res) => {
  try {
    const { productName, quantity, totalPrice, shippingInfo, paymentMethod } = req.body;

    const order = new Order({
      user: req.user._id,
      productName,
      quantity,
      totalPrice,
      shippingInfo,
      paymentMethod
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;