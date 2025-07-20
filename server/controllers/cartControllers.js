const db = require('../config/db');

exports.addToCart = (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;

  db.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
    [user_id, product_id, quantity],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Item added to cart' });
    });
};

exports.getCart = (req, res) => {
  const user_id = req.user.id;

  db.query('SELECT c.id, p.title, p.price, c.quantity FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?',
    [user_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
};