import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../components/context/Storecontext";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from '@mui/material/IconButton';
import "./fav.css";
import FavLoader from "./FavLoader";

function Fav() {
  const { cartItems, addToCart, removeFromCart, favorites, toggleFavorite,url } = useContext(StoreContext);
  const [clicked, setClicked] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleFavoriteClick = (item) => {
    setClicked(item.id); 
    toggleFavorite(item);

    setTimeout(() => {
      setClicked(null); 
    }, 300); 
  };

  return (
    <div className="favorites-page">
      {loading ? (
        // Show skeleton while loading
        <div  style={ {display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px"}}>
          <FavLoader />
          <FavLoader />
          <FavLoader />
          <FavLoader />
         
        </div>
      ) : favorites.length === 0 ? (
        <p className="No-favorite-items">No favorite items yet!</p>
      ) : (
        <div>
          <h2>My Favorites </h2>
          <div className="fav-mar">
          <div className="favorite-items">
            {favorites.map((item) => (
              <div key={item.id} className="favorite-item-card">
                <div className="main-1">
                  <img src={url+"/images/"+item.image} alt={item.name} className="fav-img" />
                    <div className="fav-icon-in">

                  <IconButton
                    className={`fav-icon ${clicked === item.id ? "clicked" : ""} ${favorites.some(fav => fav.id === item.id) ? "liked" : ""}`}
                    onClick={() => handleFavoriteClick(item)}
                    aria-label="favorite"
                  >
                    <FavoriteIcon className='fav-icon-hoverr' />
                  </IconButton>
                    </div>

                  <div className="add-cardd">
                    {!cartItems[item.id] ? (
                      <button className="deleted add-item-card-one" onClick={() => addToCart(item.id)} aria-label="add">
                        <IoIosAdd size={20} /> 
                      </button>
                    ) : (
                      <div className="cart-controls">
                        <button className="deleted add-item-card-one" onClick={() => removeFromCart(item.id)} aria-label="delete">
                          <IoIosRemove size={20} />
                        </button>
                        <p className="countt">{cartItems[item.id]}</p>
                        <button className="deleted add-item-card-one" onClick={() => addToCart(item.id)} aria-label="add">
                          <IoIosAdd size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <p className="item-des fav-des">{item.name}</p>
                 
                  <div className="price">
                    <p className="item-price">₹{item.price}</p>
                    <p className="item-price-1">₹{item.price_1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div></div>
        </div>
      )}
    </div>
  );
}

export default Fav;

