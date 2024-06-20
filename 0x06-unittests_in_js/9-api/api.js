const express = require('express');
const app = express();

const PORT = 7865;

// Middleware to log server start
app.use((req, res, next) => {
  console.log(`Server is running on http://localhost:${PORT}`);
  next();
});

// Route to handle GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Route to handle GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Error: Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
