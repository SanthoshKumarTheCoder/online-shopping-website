import jwt from 'jsonwebtoken';

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");

    // decoded will now include: id, email, name
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Error:", err);
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleWare;
