const express = require('express');
const router = express.Router();
const {createAppointment,getAllAppointments , getAppointmentById, updateAppointment, deleteAppointment} = require('../controllers/appointmentController');

// Appointment CRUD routes
router.post('/', createAppointment);
router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;