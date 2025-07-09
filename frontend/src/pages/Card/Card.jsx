import React, { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../components/context/Storecontext';
import CartLoader from './CartLoader';
import ProductLoadersListFromCart from './CartLoader';


function Card() {
  const { list_items, cartItems, removeFromCart, getTotalCartAmount,shoes_items,dress_items,watches_items,url } = useContext(StoreContext);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  const allItems = [...(list_items || []), ...(shoes_items || []),...(dress_items || []),...(watches_items || [])];

  return (
    <div className="cartt">
      {loading ? (
        <ProductLoadersListFromCart />
      ) : (
        <>
          <div className="cart-item">
            <div className="cart-item-title">
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <div className='card-br'>

            <br />
            </div>
            <hr />
            {allItems.length > 0 ? (
              allItems.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id}>
                      <div className="cart-item-title cart-item-item">
                        <img className="card-img-12" src={url+"/images/"+item.image} alt={item.name} />
                        <p className="title-1">{item.name}</p>
                        <p className="title-1">₹{item.price}</p>
                        <p className="title-1">{cartItems[item._id]}</p>
                        <p className="title-1">₹{item.price * cartItems[item._id]}</p>
                        <p onClick={() => removeFromCart(item._id)} className="cross">
                          <IconButton aria-label="delete" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </p>
                      </div>
                      <hr />
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-detils">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-detils">
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-total-detils">
                  <b>Total</b>
                  <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                </div>
              </div>
              <Link to="/Placeorder"> 
                <Button variant="contained">PROCEED TO CHECKOUT</Button>
              </Link>
            </div>

            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
