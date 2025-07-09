import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Email from '../models/Email.js';
// import Email from './models/Email.js';  // Import your Email model
dotenv.config();

// Set up the email transporter using Gmail and app password
const transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
  port: 587, // try 587 instead of 465
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_APP_PASSWORD,  // App password here
  },
});

const sendEmail = async (req, res) => {
    const { recipient, subject, body } = req.body;
  
    console.log("Received email data:", { recipient, subject, body });
  
    // Validate that all required fields are present
    if (!recipient || !subject || !body) {
      return res.status(400).json({ message: 'Recipient, subject, and body are required.' });
    }
  
    try {
      // Send the email
      await transporter.sendMail({
        from:`"Santhosh Kumar website 🤩" <${process.env.ADMIN_EMAIL}>`,
        to: recipient,  // Use recipient sent from the frontend
        subject: subject,  // Use subject sent from the frontend
        text: body,  // Use body sent from the frontend
      });
  
      // Store the email data in MongoDB
      const newEmail = new Email({
        sender: process.env.ADMIN_EMAIL,
        recipient: recipient,
        subject: subject,
        body: body,
      });
  
      await newEmail.save();
  
      res.status(200).json({ message: 'Email sent and stored successfully' });
    } catch (error) {
      console.error('Error sending email:', error.message);
      res.status(500).json({ message: 'Failed to send email' });
    }
  };
  

export default sendEmail;
