const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authmiddleware'); // Update the path if needed

// Add item to cart
router.post('/api/cart', authenticateToken, (req, res) => {
  const { productId, quantity } = req.body;

  // Example logic: you might save this to a database
  if (!productId || !quantity) {
    return res.status(400).json({ error: 'Product ID and quantity are required' });
  }

  // Simulating success
  res.status(201).json({ message: 'Item added to cart', productId, quantity });
});

module.exports = router;
