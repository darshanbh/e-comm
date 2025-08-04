const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static folder for uploads (if any images or files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes');

// Use API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Optional root path
app.get('/', (req, res) => {
  res.send('✅ Backend is running. Use /api/auth or /api/products.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});




// config/db.js
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     port: process.env.DB_PORT,
//   }
// );

// module.exports = sequelize;
