// src/app.js

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes')
const testimonialRoutes = require('./routes/testimonialRoutes')
const contactRoutes =require('./routes/contactRoutes')
const contactMessageRoutes = require('./routes/contactMessageRoutes')
const faqRoutes = require('./routes/faqRoutes')
const countAnimationRoutes = require('./routes/countAnimationRoutes')
const videoRoutes = require('./routes/videoRoutes')
const blogRoutes = require('./routes/blogRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const { authorizeAdmin } = require('./middlewares/authMiddleware');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/appointments', appointmentRoutes); // Corrected route prefix
app.use('/api/v1/employees',employeeRoutes)
app.use('/api/v1/testimonials',testimonialRoutes)
app.use('/api/v1/contact',contactRoutes)
app.use('/api/v1/contact-message',contactMessageRoutes)
app.use('/api/v1/faq',faqRoutes)
app.use('/api/v1/countAnimation',countAnimationRoutes)
app.use('/api/v1/video',videoRoutes)
app.use('/api/v1/blog', blogRoutes);
// Example protected route for admin users only
app.get('/api/admin', authorizeAdmin, (req, res) => {
  res.send('Welcome Admin!');
});


// Error handling middleware  
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;