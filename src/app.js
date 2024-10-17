// src/app.js

require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
