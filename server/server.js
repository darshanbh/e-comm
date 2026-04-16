const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = 5000;

// ✅ FIXED CORS (ONLY ONCE)
app.use(cors({
  origin: [
    "https://e-commerce-prime.netlify.app/"
  ],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB
const db = require('./config/db');

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Products API
app.get('/api/products', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM products');
    res.json(results);
  } catch (err) {
    console.error("❌ DB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});