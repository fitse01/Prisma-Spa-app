// src/routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.post("/", createContact);            // Create new contact information
router.get("/", getAllContacts);            // Get all contact information
router.get("/:id", getContactById);         // Get contact by ID
router.put("/:id", updateContact);          // Update contact information by ID
router.delete("/:id", deleteContact);       // Delete contact by ID

module.exports = router;
