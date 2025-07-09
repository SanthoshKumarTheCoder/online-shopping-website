// Importing necessary modules and libraries
import React, { useContext, useEffect, useState } from "react";
import { Button, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { decodeJwt } from 'jose';
import { toast } from "react-toastify";
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Avatar from '@mui/material/Avatar';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Navbar() {
  const { cartItems, favoriteCount, setToken, role  } = useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [user, setUser] = useState(null); // New state to store user information
  const navigate = useNavigate();
const [show, setShow] = useState(false);
  const totalCartItems = Object.values(cartItems).reduce(
    (total, num) => total + num,
    0
  );

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = decodeJwt(credentialResponse.credential);
    console.log("Decoded JWT:", decoded); // Debugging
    
    // On successful login, show the logout button
    setShowLogin(true);
    const userData = {
      name: decoded.name,
      imageUrl: decoded.picture,
    };

   // Set user data to state
   setUser(userData);
   setShowLogin(true);  // Show the logout button

    // Send decoded JWT to the server
    fetch('http://localhost:5008/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(decoded),
    })
      .then((res) => res.json())
       .then((data) => {
           console.log("🌐 Frontend received:", data);
           console.log("🔐 Token received:", data.token);
              console.log("👤 User received:", data.user);

      if (data.token) {
      
        localStorage.setItem("token", data.token);
         window.location.reload();
          if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
        // ✅ Set token in StoreContext if available
        if (typeof setToken === 'function') {
          setToken(data.token); // optional: pass setToken from context
        }

        toast.success("Welcome to Santhosh Store", { position: "top-right" });
      } else {
        toast.error("Login failed: No token received.", { position: "top-left" });
      }
    })
      .catch((error) => console.error("Error saving user:", error));
  };

 const handleLogout = (event) => {
  event.preventDefault();  // ✅ Prevent default button/link behavior

  console.log("🔒 Logout triggered");

  googleLogout();           // ✅ Log out from Google
  console.log("🚪 Logged out from Google");

  setUser(null);            // ✅ Clear user state
  setToken("");             // ✅ Clear JWT token from state
  setShowLogin(false);      // ✅ Hide login component

  localStorage.removeItem("token");  // ✅ Remove saved token
  localStorage.removeItem("user");   // ✅ Remove saved user info
 window.location.reload();
  // Optional: redirect to homepage or login
  // navigate('/'); // if using react-router-dom
};

useEffect(() => {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const savedToken = localStorage.getItem('token');

  if (savedUser && savedToken) {
    setUser(savedUser);       // ✅ restore user info
    setToken(savedToken);     // ✅ restore token into context
    setShowLogin(true);       // ✅ show logout button
  }
}, []);


  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
    <div className="nav-pad  fixed-top  bg-white">
      <div className="navbar-top ">
        <div>
          <button className="buttonn" onClick={() => navigate("/")}>
            <span>SANTHOSH</span>
          </button>
        </div>

        <div className="navbar-left">
          <Link to="/dress" style={{ textDecoration: "none" }}>
            <Button className="navbar-left-11"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("outfit")}
            >
              Womens Collection
            </Button>
          </Link>
          <Link to="/watches" style={{ textDecoration: "none" }}>
            <Button className="navbar-left-11"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("watches")}
            >
              Mens Collection
            </Button>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button className="navbar-left-11"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("backpack")}
            >
               Backpack
            </Button>
          </Link>
          {/* <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("backpack")}
            >
              Backpack
            </Button>
          </Link> */}
          <Link to="/shoes" style={{ textDecoration: "none" }}>
            <Button className="navbar-left-12"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("footwear")}
            >
              Footwear
            </Button>
          </Link>
        </div>

        <div className="navbar-right">
          <div className="nav-add-item">
            <Link to="/Favorite Items">
              <IconButton color="error" aria-label="favorites">
                <Badge badgeContent={favoriteCount} color="error">
                  <FavoriteIcon
                    style={{
                      color: "rgb(77, 73, 73)",
                      transition: "color 0.3s ease-in-out",
                    }}
                    className="fav-icon-hover"
                  />
                </Badge>
              </IconButton>
            </Link>

            <Link to="/Card">
              <IconButton color="primary">
                <Badge badgeContent={totalCartItems} color="error">
                  <ShoppingCartIcon className="fav-icon-hover" />
                </Badge>
              </IconButton>
            </Link>
        
             {/* Login/Logout Logic  */}
            <div>
              {!showLogin ? ( <div>
      <button className="sigin-pro" onClick={() => setShow(true)} >Singin</button>

      {show && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            paddingLeft:'0px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h6>Welcome to Santhosh Store! </h6>
            <p>"Please log in or sign up to continue."</p>
            
            <ul style={{fontSize:"8px", textAlign:"start"}}>
              <span> <Checkbox {...label} defaultChecked />Terms and Conditions</span><br></br>
              <span style={{textAlign:"end"}}>1. By using Santhosh Store, you agree to our terms and conditions.</span><br></br>
            <span style={{textAlign:"end"}}> 2. All product prices are subject to change without prior notice.<br></br>
</span>
<span style={{textAlign:"end"}}>3. We are not responsible for any delays caused by third-party delivery services.<br></br></span>

<span style={{textAlign:"end"}}>4. Personal data will be handled securely in accordance with our Privacy Policy.</span>
            </ul>
             <div className="GoogleLogin"style={{paddingLeft:"30px"}}>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => console.log("Login Failed")}
                  useOneTap
                 clientId="152867217877-13vfve1lt3a5kdq05ugd2e17r9g4fopd.apps.googleusercontent.com"
                  prompt="select_account"
                /></div><br></br><br></br>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
              ) : (
                <>
                 <div className='navbar-profile'>
                    
                    <div className='navbar-profile-111'>
                    <img
                      src='/src/assets/user.png'
                    
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    /><span>{user?.name}</span></div>
                     <ul className='nav-profile-dropdown'>
                       <li>{role === "admin" && (
               <Link to="/myorder"> <Button variant="outlined"  sx={{
    color: "black",
    border: "none",
    fontSize: "10px",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  }} ><Avatar src="/broken-image.jpg" /> <span style={{paddingLeft:"8px"}}>Admin</span>
                  </Button></Link>
            )}</li>
                     <li > <Link to="/myorder"> <Button variant="outlined"  sx={{
    color: "black",
    border: "none",
    fontSize: "10px",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  }} ><IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>MyOrders
                  </Button></Link></li> 
                 
                     <li className='nav-profile-dropdown-logout' >  <Button variant="outlined"  sx={{
    color: "black",
    border: "none",
    fontSize: "10px",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  }} onClick={handleLogout}>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>  Logout
                  </Button></li>
                  </ul>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div className="navber-mobile">
      
    <nav className="navbar bg-body-tertiary fixed-top ">
      <div className="container-fluid ">
      <button className="buttonn-1" onClick={() => navigate("/")}>
            <span>SANTHOSH</span>
          </button>
          <div  style={{ display:"flex",gap:"6px"}}>
            <div className="fav-icon-hover-1">
          <Link to="/Favorite Items">
              <IconButton color="error" aria-label="favorites">
                <Badge badgeContent={favoriteCount} color="error">
                  <FavoriteIcon
                    style={{
                      color: "rgb(77, 73, 73)",
                      fontSize: "18px", 
                     fontWeight: "400",
                      transition: "color 0.3s ease-in-out",
                    }}
                    className="fav-icon-hover"
                  />
                </Badge>
              </IconButton>
            </Link></div>
             {!showLogin ? ( <div>
      <button onClick={() => setShow(true)} style={{marginTop:"5px", border:"1px solid black" , borderRadius:"20px",padding:"1px", paddingLeft:"10px", paddingRight:"10px",fontSize:"14px"}}>Singin</button>

      {show && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            paddingLeft:'0px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h6>Welcome to Santhosh Store! </h6>
            <p>"Please log in or sign up to continue."</p>
            <ul style={{fontSize:"8px", textAlign:"start"}}>
              <span> <Checkbox {...label} defaultChecked />Terms and Conditions</span><br></br>
              <span style={{textAlign:"end"}}>1. By using Santhosh Store, you agree to our terms and conditions.</span><br></br>
            <span style={{textAlign:"end"}}> 2. All product prices are subject to change without prior notice.<br></br>
</span>
<span style={{textAlign:"end"}}>3. We are not responsible for any delays caused by third-party delivery services.<br></br></span>

<span style={{textAlign:"end"}}>4. Personal data will be handled securely in accordance with our Privacy Policy.</span>
            </ul>
             <div className="GoogleLogin"style={{paddingLeft:"30px"}}>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => console.log("Login Failed")}
                  useOneTap
                 clientId="152867217877-13vfve1lt3a5kdq05ugd2e17r9g4fopd.apps.googleusercontent.com"
                  prompt="select_account"
                /></div><br></br><br></br>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
              ) : (
                <>
                    
                    <div className='mobile-user-img'>
                   <Link to="/userinfo"> <img
                      src='/src/assets/user.png'
                    
                      style={{ width: "18px", height: "18px", borderRadius: "50%" ,marginTop:"10px"}}
                    /></Link>
                  </div>
                </>
              )}
            <Link to="/Card">
              <IconButton color="primary">
                <Badge badgeContent={totalCartItems} color="error">
                  <ShoppingCartIcon className="fav-icon-hover" style={{
                      fontSize: "18px", 
                     fontWeight: "400",}} />
                </Badge>
              </IconButton>
            </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{
            fontSize: "10px", 
           fontWeight: "200",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div style={{ width: "70%", margin: "0 auto" }}
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
          <button className="buttonn-1" onClick={() => navigate("/")}>
            <span>SANTHOSH</span>
          </button>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
              <Link to="/dress" style={{ textDecoration: "none" }}>
            <Button className="navbar-lef"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("outfit")}
            >
              Womens Collection
            </Button>
          </Link>
          <hr></hr>
              </li>
              <li className="nav-item">
              <Link to="/watches" style={{ textDecoration: "none" }}>
            <Button className="navbar-lef"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("watches")}
            >
              Mens Collection
            </Button>
          </Link>
          <hr></hr>
              </li>
              <li className="nav-item">
              <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("backpack")}
            >
              Backpack
            </Button>
          </Link>
          <hr></hr>
              </li>
              <li className="nav-item">
              <Link to="/shoes" style={{ textDecoration: "none" }}>
            <Button className="navbar-lef"
              sx={{ color: "black" }}
              variant="text"
              onClick={() => handleClick("footwear")}
            >
              Footwear
            </Button>
          </Link>
          <hr></hr>
              </li>
              <li className="nav-item">
              <Link to="/Favorite Items" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
  <IconButton color="error" aria-label="favorites">
    <Badge badgeContent={favoriteCount} color="error">
      <FavoriteIcon
        style={{
          color: "rgb(77, 73, 73)",
          transition: "color 0.3s ease-in-out",
        }}
        className="fav-icon-hover"
      />
    </Badge>
  </IconButton>
  <span style={{ marginLeft: "8px", fontSize: "16px", fontWeight: "500", color:"black" }}>
    Favorites
  </span>
</Link>

          <hr></hr>
              </li>
              <li className="nav-item">
                <Link to="/myorder"> <Button variant="outlined"  sx={{
    color: "black",
    border: "none",
    fontSize: "10px",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  }} ><IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>MyOrders
                  </Button></Link>
              </li><hr></hr>
              <li className="nav-item">
              <Link to="/Card"  style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <IconButton color="primary">
                <Badge badgeContent={totalCartItems} color="error">
                  <ShoppingCartIcon className="fav-icon-hover" />
                </Badge>
              </IconButton>
              <span style={{ marginLeft: "8px", fontSize: "16px", fontWeight: "500", color:"black" }}>
    Cart
  </span>
            </Link>
          <hr></hr>
              </li>
              <li className="nav-item">
              <div>
              {!showLogin ? (
                <></>
              ) : (
                <>
                 <div className='navbar-profile'>
                    {/* Display user profile image and name */}
                    <div className='navbar-profile-11'>
                    <img
                      src='/src/assets/user.png'
                    
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    /><span>{user?.name}</span><Button variant="outlined"  sx={{
                      color: "black",
                      border: "none",
                      fontSize: "10px",
                      outline: "none",
                      "&:focus": {
                        outline: "none",
                      },
                    }} onClick={handleLogout}>
                                      <div className="logout-google"> <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/> </svg>  Logout</div>
                                    </Button>
                                    </div>
                    <hr></hr>
                  </div>
                </>
              )}
            </div>
          
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
    
    </div>
    
    </div>
  );
}

export default Navbar;



