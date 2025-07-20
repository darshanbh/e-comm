const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Dummy user (replace with DB logic)
const dummyUser = {
  email: 'test@example.com',
  password: await bcrypt.hash('123456', 10),
  name: 'Test User',
  id: 1
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email !== dummyUser.email) {
    return res.status(400).json({ error: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, dummyUser.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Incorrect password' });
  }

  const token = jwt.sign({ id: dummyUser.id }, 'secretkey');
  res.json({ token, user: { id: dummyUser.id, name: dummyUser.name, email: dummyUser.email } });
});

module.exports = router;
