const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    // Verify the token and extract user data
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user data to req.user
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
