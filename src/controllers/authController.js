const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../models/user'); // Import Prisma instance

exports.register = async (req, res) => {
  const { email, password, role, age } = req.body; // Include age in the destructuring

  if (!age) {
    return res.status(400).json({ error: "Age is required" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role || 'user', // Default role as 'user' if not provided
        age,
      },
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'User registration failed' });
  }
};


// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id, role: user.role }, // Include role in token payload
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'Login failed' });
  }
};

