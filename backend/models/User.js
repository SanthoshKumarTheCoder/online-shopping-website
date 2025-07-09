import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: String,
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',  
  },
  picture: String
}, { timestamps: true });


const userModel = mongoose.model('User', userSchema);

export default userModel;
