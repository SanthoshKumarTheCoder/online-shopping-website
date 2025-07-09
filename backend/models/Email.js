// models/Email.js
import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  sentAt: { type: Date, default: Date.now }
});

const Email = mongoose.model('User Email', emailSchema);
export default Email;
