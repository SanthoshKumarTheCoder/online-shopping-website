import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    req.user = decoded; // ⬅️ store entire user object from token
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    res.status(401).json({ success: false, message: 'Token invalid or expired' });
  }
};
export default authMiddleware;