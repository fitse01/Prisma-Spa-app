// src/controllers/userController.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch users" });
  }
};

// Create a new user
// for authentication purpose
const createUser = async (req, res) => {
  const { email, name } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Unable to create user" });
  }
};

module.exports = { getAllUsers, createUser };
