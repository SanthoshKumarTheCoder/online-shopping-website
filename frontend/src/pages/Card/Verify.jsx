import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/context/Storecontext';
import axios from 'axios';
import { toast } from 'react-toastify'; // optional

function Verify() {
     const [searchParams]=useSearchParams();
    const success =searchParams.get("success")
    const orderId =searchParams.get("orderId")
    const { setCartItems}=useContext(StoreContext);
    const navigate=useNavigate();
const verifyPament=async()=>{
    const response=await axios.post(`$https://ba-ua9j.onrender.com/api/order/verify`,{success,orderId})
if (response.data.success) {
    navigate("/myorder")
}
else{
    navigate("/")
}
}
useEffect(()=>{
    verifyPament();
    const clearCartAfterPayment = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");

    if (success === "true") {
      // ✅ Clear cart in localStorage
      localStorage.removeItem("cart");

      // ✅ Optionally update cart context if using Context API
      setCartItems([]);

      // ✅ Optionally show a toast or redirect
      toast.success("Payment successful! Cart cleared.");
    }
  };

  clearCartAfterPayment();
},[])


  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify
