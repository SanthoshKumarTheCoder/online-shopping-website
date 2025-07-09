import mongoose from 'mongoose';


const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true },
  price:{ type: Number, required: true },
  price_1:{ type: Number, required: true },
  image:{ type: String, required: true },
  category:{ type: String, required: true }
})
const itemModel = mongoose.models.item || mongoose.model("items",itemSchema);

export default itemModel;