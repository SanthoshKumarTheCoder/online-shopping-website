import express from 'express';
import sendEmail from '../controller/contactController.js';

const router = express.Router();

// Ensure this route matches the frontend request
router.post('/contact', sendEmail);

export default router;
