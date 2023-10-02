const express = require('express');
const router = express.Router();
const User = require('../models/users');


// Register a new user
router.post('/register', async (req, res) => {
  console.log('Register request received:', req.body); 
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in /register:', error);
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }


    if (req.body.password !== user.password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error('Error in /login:', error);
  }
});

module.exports = router;
