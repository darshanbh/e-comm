const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// ================= REGISTER =================
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [existing] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email.trim()]
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name.trim(), email.trim(), hashedPassword]
    );

    res.json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('❌ Register Error:', err);
    res.status(500).json({ error: err.message });
  }
});


// ================= LOGIN =================
// ================= LOGIN =================
router.post('/login', async (req, res) => {
  let { email, password } = req.body;

  email = email.trim();
  password = password.trim();

  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    // ✅ FIX STARTS HERE
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
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
    // ✅ FIX ENDS HERE

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ================= FORGOT PASSWORD =================
router.post('/forgot-password', async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ error: "Email and new password required" });
  }

  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email.trim()]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword.trim(), 10);

    await db.query(
      'UPDATE users SET password = ? WHERE email = ?',
      [hashedPassword, email.trim()]
    );

    res.json({ message: "Password updated successfully" });

  } catch (err) {
    console.error("❌ Forgot Password Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;