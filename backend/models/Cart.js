import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true
  },
  items: [
    {
      itemId: { type: String, required: true },
      quantity: { type: Number, default: 1 }
    }
  ]
});

export default mongoose.model("Cart", cartSchema);
