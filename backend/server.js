import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import itemRouter from "./routes/itemrout.js";
import sendEmail from "./controller/contactController.js";
import route from "./routes/auth.js";  // Import authRoutes if you have them defined in auth.js
import { sendWelcomeEmail } from "./controller/authController.js";
// import router from "./routes/cartRoutes.js";
import  { handleGoogleLogin } from'./controller/gooauthController.js';
import orderRouter from "./routes/orderRout.js";
import cartRout from "./routes/cartRoutes.js";
import googleAuthRoutes from "./routes/auth.js";



dotenv.config();

const app = express();
const port = process.env.PORT ||5008;

app.use(express.json());
app.use(cors());

app.use("/api/item",itemRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRout);
app.use("/api/order",orderRouter)

connectDB();

// app.post('/api/auth/google', async (req, res) => {
//     try {
//       const googlePayload = req.body;
//       console.log('📥 Received payload:', googlePayload);
  
//       const user = await handleGoogleLogin(googlePayload);
//       const { email, name } = req.body;
  
//       await sendWelcomeEmail(email, name);
  
//       res.status(200).json({ 
//         message: 'User authenticated and email sent!',
//         user 
//       });  // ✅ single response here
//     } catch (err) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
app.get("/", (req, res) => {
    res.send("✅ API is Working!");
});

app.use('/api/contact', sendEmail);
// app.use('/api/auth', route);
app.use('/api/auth', googleAuthRoutes);
// app.post('/google', loginWithGoogle);




app.listen(port, () => {
    console.log(` Server Started on http://localhost:${port}`);
});
