// src/controllers/contactController.js
const prisma = require('../config/prismaClient')


exports.createContact = async (req, res) => {
  try {
    const { email, location, phone, workingDays, facebookUrl, instagramUrl, website, emergencyContact } = req.body;
    const contact = await prisma.contact.create({
      data: { email, location, phone, workingDays, facebookUrl, instagramUrl, website, emergencyContact },
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await prisma.contact.findUnique({ where: { id: parseInt(id) } });
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, location, phone, workingDays, facebookUrl, instagramUrl, website, emergencyContact } = req.body;
    const contact = await prisma.contact.update({
      where: { id: parseInt(id) },
      data: { email, location, phone, workingDays, facebookUrl, instagramUrl, website, emergencyContact },
    });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.contact.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
