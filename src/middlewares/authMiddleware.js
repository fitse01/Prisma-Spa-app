// const jwt = require('jsonwebtoken');

// const authorize = (roles = []) => {
//   if (typeof roles === 'string') roles = [roles];

//   return (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       if (roles.length && !roles.includes(decoded.role)) {
//         return res.status(403).json({ error: 'Forbidden' });
//       }

//       req.user = decoded;
//       next();
//     } catch (error) {
//       res.status(401).json({ error: 'Invalid token' });
//     }
//   };
// };

// module.exports = authorize;





const jwt = require('jsonwebtoken');

// Middleware to protect admin routes
const authorizeAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied: Admins only' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { authorizeAdmin };
