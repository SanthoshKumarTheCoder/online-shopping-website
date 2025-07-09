import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from '../controller/authController.js';
// import User from '../models/User.js';  // Ensure that User model is using ES module syntax

const googleAuthRoutes = express.Router();

googleAuthRoutes.post('/google', async (req, res) => {
  
  const { email, name, picture, sub } = req.body;
  console.log("🟢 Received user:", req.body);

  try {
    let user = await User.findOne({ email });
    console.log("🔍 User found in DB?", user);

    if (!user) {
      user = new User({ email, name, picture,  googleId: sub });
      console.log("🛠️ User not found, creating new:", user);

     await user.save();
console.log("✅ User saved successfully");
user = await User.findOne({ email }); // ✅ Fetch full user object again

    } else {
      console.log("🔁 User already exists, skipping save");
    }
 await sendWelcomeEmail(email, name);
const jwtSecret = process.env.JWT_SECRET || 'secret_key';
    console.log("🔐 Using JWT secret:", jwtSecret);

   const token = jwt.sign(
      { id: user._id,  email: user.email, name: user.name, role: user.role },
       jwtSecret, // fallback in dev
      
      { expiresIn: '7d' }
    );
 console.log("🛡️ JWT secret used:", process.env.JWT_SECRET || 'secret_key');
 console.log("✅ Final response sending:", { token, user });

    // ✅ Send token in response
    res.status(200).json({ token, user });
    console.log("🔐 Sending token to frontend:", token);

  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


export default googleAuthRoutes;  // Exporting the router with ES module syntax\
// export const loginWithGoogle = async (req, res) => {
//   const { email, name } = req.body;
  
//   const user = { email, name }; // You could also store/retrieve from DB

//   const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '8d' });

 
//   res.status(200).json({ token, user });
// };
