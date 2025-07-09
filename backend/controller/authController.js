// authController.js

import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,       // safer than hardcoding
      pass: process.env.ADMIN_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Santhosh Store" <${process.env.ADMIN_EMAIL}>`,
    to: email,
    subject: "Welcome to Santhosh Store 🎉",
    html: `
    <h3>Hi ${name},</h3>
    <p>Welcome to Santhosh Store! We're excited to have you here.</p>
    <p>As a token of appreciation, here's a special offer just for you!</p>
    <p>Let us know if you need any help with your shopping journey.</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Welcome email sent to ${email}`);
  } catch (error) {
    console.error("❌ Error sending welcome email:", error);
    throw error;
  }
};
