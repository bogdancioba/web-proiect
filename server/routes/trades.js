const express = require('express');
const router = express.Router();
const Trade = require('../models/trade');
const User = require('../models/users');
const Stock = require('../models/stock');

// Create a trade (buy/sell)
router.post('/', async (req, res) => {
  try {
    const { userId, stockId, quantity, price, action } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const stock = await Stock.findById(stockId);
    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    const trade = new Trade({
      user: userId,
      stock: stockId,
      quantity,
      price,
      action,
    });

    await trade.save();
    res.status(201).json({ message: 'Trade created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
