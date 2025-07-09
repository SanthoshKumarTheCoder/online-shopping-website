import mongoose from "mongoose";

// Define a sub-schema for cart items
const PaymentSchema = new mongoose.Schema({
  paymentId: String,
  amount: Number,
  currency: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

 const Payment = mongoose.model('Payment', PaymentSchema);

 export default Payment;