import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../context/Storecontext";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { decodeJwt } from 'jose';
// import { toast } from "react-toastify";
// import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function UserInfo() {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    console.log("🔐 Token:", token);
    if (savedUser) {
      console.log("👤 Google name:", savedUser.name);
      console.log("🖼️ Google picture:", savedUser.imageUrl);
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {user ? (
        <>
          <h2 style={{fontSize:"18px"}}>Welcome, {user.name}!</h2>
         <ul style={{placeSelf:"flex-start", paddingTop:"10px"}}>
          <li style={{placeSelf:"flex-start"}}><Link  style={{ textDecoration: 'none' }} to="/myorder">MyOrders
                  </Link></li>
          <li style={{placeSelf:"flex-start"}}><Link style={{ textDecoration: 'none' }} to="/Card">Card
            </Link></li>
          <li style={{placeSelf:"flex-start"}}> <Link style={{ textDecoration: 'none' }} to="/Favorite Items">My Favorite
            </Link></li>
          
         </ul>
         <br></br>
         <h6 style={{fontSize:"10px"}}><span style={{fontWeight:"800"}}>🛍️ Santhosh Styles </span> Your Ultimate Fashion Destination </h6>
        <p style={{fontSize:""}}>Welcome to Santhosh Styles, a curated online fashion store where elegance meets convenience. We specialize in delivering premium-quality fashion accessories and clothing for style-conscious individuals.</p>
        <p style={{fontSize:""}}>At Santhosh Styles, we believe that fashion is a form of self-expression. That’s why our collection includes handpicked items across categories like:</p>
        <ul style={{placeSelf:"flex-start", paddingTop:"0px"}}>
          <li style={{fontSize:"8px",placeSelf:"flex-start" , textAlign:"left"}}><span style={{fontWeight:"800"}}>Trendy Bags:</span> From daily totes to elegant clutches, our bag collection blends utility with aesthetic appeal. Each design is carefully chosen for modern lifestyles.</li>
          <li style={{fontSize:"8px",placeSelf:"flex-start" , textAlign:"left"}}><span style={{fontWeight:"800"}}>Stylish Shoes:</span> Step into comfort and style with our selection of shoes. Whether you're dressing up for an event or heading out for a casual walk, we’ve got the perfect pair for you.</li>
          <li style={{fontSize:"8px",placeSelf:"flex-start" , textAlign:"left"}}><span style={{fontWeight:"800"}}>Elegant Dresses:</span> Be it a party, an office look, or a casual day out—our dress collection is designed to make you stand out effortlessly.</li>
          <li style={{fontSize:"8px",placeSelf:"flex-start" , textAlign:"left"}}><span style={{fontWeight:"800"}}>Timeless Watches:</span> Our exclusive range of watches brings classic sophistication to your wrist, combining precision and design seamlessly.</li>
        </ul>
        
        
        
        
        
        
        </>
      ) : (
        <p>No user info available.</p>
      )}

    </div>
  );
}

export default UserInfo;
