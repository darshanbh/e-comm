// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');
// const bcrypt = require('bcrypt');

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     // Check if email already exists
//     const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (existing.length > 0) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     await db.query(
//       'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
//       [name, email, hashedPassword]
//     );

//     res.json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).json({ error: 'Registration failed' });
//   }
// });

// // For login 
// // ✅ LOGIN ROUTE
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return res.status(400).json({ error: 'All fields are required' });

//   try {
//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (rows.length === 0)
//       return res.status(401).json({ error: 'Invalid email or password' });

//     const user = rows[0];

//     const match = await bcrypt.compare(password, user.password);
//     if (!match)
//       return res.status(401).json({ error: 'Invalid email or password' });

//     // ✅ Success
//     res.json({
//       message: 'Login successful',
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email
//       }
//     });

//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;



// ✅ REGISTER ROUTE WITH HASHING
// routes/auth.js or wherever your login endpoint is
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../config/db');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    console.log('Checking for existing user...');
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    console.log('Existing user check complete.');

    if (existing.length > 0)
      return res.status(400).json({ error: 'Email already registered' });

    console.log('Hashing password...');
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed.');

    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    console.log('User inserted.');

    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// ...register route here...

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0)
      return res.status(401).json({ error: 'Invalid email or password' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name, 
        email: user.email
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;