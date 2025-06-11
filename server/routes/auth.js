// ViddyStream/server/routes/auth.js

const express = require('express');
const router = express.Router();

// Register User
router.post('/register', (req, res) => {
  res.send('Register endpoint hit!'); // Placeholder for now
});

// Login User
router.post('/login', (req, res) => {
  res.send('Login endpoint hit!'); // Placeholder for now
});

module.exports = router;