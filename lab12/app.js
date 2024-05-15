const express = require('express');
const app = express();
const port = 3000;

// Configuring the app
app.enable('case sensitive routing') === app.set('case sensitive routing', true)

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/index.html');
});

// Import routers
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');

// Use routers
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/src/views/404.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something error!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});