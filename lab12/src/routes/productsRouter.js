const express = require("express");
const router = express.Router();
const path = require('path');

// Handle GET request for '/products'
router.get("/", (req, res) => {
  res.send("Products list");
});

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'products', 'create.html'));
});

// Handle POST request for '/products'
router.post("/", (req, res) => {
  // res.send("Product added");
  const productName = req.body.name;
  const productQuantity = req.body.quantity;
  console.log(`Creating product: ${productName} with quantity ${productQuantity}`);
  res.send('Product created successfully');
});

module.exports = router;
