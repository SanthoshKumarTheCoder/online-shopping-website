import mongoose from 'mongoose';


const dressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true },
  price:{ type: Number, required: true },
  price_1:{ type: Number, required: true },
  image:{ type: String, required: true },
  category:{ type: String, required: true }
})
const dressModel = mongoose.models.item || mongoose.model("Womens collections",dressSchema);

export default dressModel;