// import { verify } from "jsonwebtoken";
import orderModel from "../models/ordermodel.js";
import userModel from "../models/User.js";
import Stripe from 'stripe'
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder=async(req,res)=>{
    const frontend_url="https://santhoshkumar.onrender.com"
try {
  const userEmail = req.user?.email;
    if (!userEmail) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userId = user._id;

    const newOrder=new orderModel({
        userId:userId ,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address,
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId,{cartData:{}});
    const line_items = req.body.items.map((item) => ({
             price_data: {
            currency: "inr",
            product_data: {
              name: item.name
            },
            unit_amount:item.price*100*80
        },
        quantity: item.quantity
          }))
    
        line_items.push({
          price_data: {
            currency: "inr",
            product_data: {
              name: "Delivery Charges"
            },
            unit_amount:2*100*80
          },
          quantity: 1
        })
        const session =await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({success:true,session_url:session.url})
   
        
} catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

const verifyOrder=async(req,res)=>{
  const {orderId,success} = req.body;
  try {
      if (success=="true") {
          await orderModel.findByIdAndUpdate(orderId,{payment:true});
          res.json({success:true,message:"Paid"})
      }
      else{
        await orderModel.findByIdAndDelete(orderId);
        res.json({success:false,message:"Not  Paid"})
      }
  } catch (error) {
console.log(error)
res.json({success:false,message:"Error"})
}
}
//user order for frontend

const userOrder = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const user = await userModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const orders = await orderModel.find({ userId: user._id });
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const listOrder =async (req,res)=>{
  try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders});
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"});
 }

}
const updateStatus=async(req,res)=>{
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Update Status"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

export {placeOrder,verifyOrder,userOrder,listOrder,updateStatus}
