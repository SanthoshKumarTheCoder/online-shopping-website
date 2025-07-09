import mongoose from 'mongoose';


const menSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true },
  price:{ type: Number, required: true },
  price_1:{ type: Number, required: true },
  image:{ type: String, required: true },
  category:{ type: String, required: true }
})
const menModel = mongoose.models.item || mongoose.model("Mens collections",menSchema);

export default menModel;