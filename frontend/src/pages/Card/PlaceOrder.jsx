import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../components/context/Storecontext';
import {  useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const { token, list_items, cartItems, getTotalCartAmount, shoes_items, dress_items, watches_items ,url} = useContext(StoreContext);
  // const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    
    const allItems = [...list_items, ...shoes_items, ...dress_items, ...watches_items];
    const orderItems = allItems
      .filter(item => cartItems[item._id] > 0)
      .map(item => ({
        ...item,
        quantity: cartItems[item._id]
      }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (response.data.success) {
       const {session_url}=response.data;
      window.location.replace(session_url);
      } else {
        setShowPopup(true);
        // alert("User is not authenticated. Please log in.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong while placing the order.");
    }
  };
  const closePopup = () => {
    setShowPopup(false);
  };
    const navigate = useNavigate();
 useEffect(() => {
  if (!token) {
    setPopupMessage("⚠️ Please log in to place an order.");
    setShowPopup(true);
  } else if (getTotalCartAmount() === 0) {
    setPopupMessage("🛒 Please select at least one product.");
    setShowPopup(true);
  }
}, [token]);

  

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
      </div>
      
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className='cart-total-detils-1'>
            <div className="cart-total-detils">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detils">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detils">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
          {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h2>Notice</h2>
      <p>{popupMessage}</p>
      <button onClick={closePopup}>Close</button>
    </div>
  </div>
)}

        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
