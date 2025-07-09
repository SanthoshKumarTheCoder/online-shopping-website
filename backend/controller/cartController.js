import Cart from "../models/Cart.js";
import User from "../models/User.js";

//add item to user cart

export const addToCart = async (req, res) => {
  console.log("🧠 req.user:", req.user);
 const { itemId } = req.body;
  const userEmail = req.user?.email;

  try {
    if (!userEmail) {
      return res.status(400).json({ success: false, message: "No user email in request" });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userId = user._id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // ✅ Include userEmail when creating cart
      cart = new Cart({
        userId,
        userEmail: user.email,
        items: [{ itemId, quantity: 1 }]
      });
    } else {
      const existingItem = cart.items.find(item => item.itemId === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({ itemId, quantity: 1 });
      }
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Item added to cart' });
  } catch (err) {
    console.error('Add to Cart Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

//remove item to user cart
export const removeFromCart = async (req, res) => {
  const { itemId } = req.body;
  const userEmail = req.user?.email;

  try {
    if (!userEmail) {
      return res.status(400).json({ success: false, message: "No user email in request" });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userId = user._id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.itemId === itemId);
    if (itemIndex > -1) {
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1);
      }
    }

    // ✅ Ensure userEmail is present before saving
    if (!cart.userEmail) {
      cart.userEmail = userEmail;
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Item removed from cart' });
  } catch (err) {
    console.error('Remove from Cart Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

//fetch user cart data

export const getCart = async (req, res) => {
  const userEmail = req.user?.email;

  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userId = user._id;

    const userCart = await Cart.findOne({ userId });
    if (!userCart) {
      return res.json({ success: true, cartdata: {} });
    }

    const cartData = {};
    userCart.items.forEach(item => {
      cartData[item.itemId] = item.quantity;
    });

    res.json({ success: true, cartdata: cartData });
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
