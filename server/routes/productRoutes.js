const express = require('express');
const router = express.Router();
const con = require('../config/db'); // <-- corrected path

router.get('/products', async (req, res) => {
  try {
    const [rows] = await con.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error('Fetch products error:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;