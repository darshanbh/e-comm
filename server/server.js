const express = require('express');
const cors = require('cors');
const path = require('path');
const https = require('https');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: [
    "https://e-commerce-prime.netlify.app",
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db = require('./config/db');

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Keep-alive ping route
app.get('/ping', (req, res) => res.json({ status: 'alive' }));

// Product cache
let productsCache = null;
let cacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000;
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

  // Keep-alive interval — starts after server is up
  setInterval(() => {
    https.get('https://primeelectro.onrender.com/ping', (res) => {
      console.log('Keep-alive ping:', res.statusCode);
    }).on('error', () => {});
  }, 14 * 60 * 1000);
});

app.get('/api/clearcache', (req, res) => {
  productsCache = null;
  cacheTime = null;
  res.json({ message: 'Cache cleared' });
});