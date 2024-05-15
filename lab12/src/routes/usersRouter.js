const express = require('express');
const router = express.Router();
const path = require('path');

// Handle GET request for '/users'
router.get('/', (req, res) => {
  res.send('Users list');
});

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'users', 'create.html'));
});

// Handle POST request for '/users'
router.post('/', (req, res) => {
  // res.send('User created');
  const userName = req.body.name;
  const userEmail = req.body.email;
  console.log(`Creating user: ${userName} with email ${userEmail}`);
  res.send('User created successfully');
});

module.exports = router;