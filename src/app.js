// src/app.js

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoutes');
const {authorizeAdmin} = require('./middlewares/authMiddleware');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);


// Example protected route for admin users only
app.get('/api/admin', authorizeAdmin, (req, res) => {
  res.send('Welcome Admin!');
});


// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
