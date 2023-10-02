const express = require('express');
const router = express.Router();
const Stock = require('../models/stock');

// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;