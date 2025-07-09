import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { StoreContext } from '../../components/context/Storecontext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from '@mui/material/IconButton';



function ListShoes({ id, name, price, image, price_1, description,  category, selectedCategory }) {
  const { cartItems, favorites, toggleFavorite, url } = useContext(StoreContext);
  const [clicked, setClicked] = useState(null); // Track clicked animation state


  const navigate = useNavigate();
  if (selectedCategory !== "All" && selectedCategory !== category) {
    return null;
  }

  const isLiked = favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    setClicked(id); // Set clicked item for animation
    toggleFavorite({ id, name, price, image, description }); // Pass required properties

    setTimeout(() => {
      setClicked(null); // Reset after animation
    }, 300);
  };
  const handleItemClick = () => {
    navigate(`/item/${id}`);
  };
  if (!cartItems) return null;
  return (
    <div className='list-items-1'>
    <div className='list-item'>
      <div >
        <div className='main-1'>
          <img className='item-img main_img-2'src={url+"/images/"+image} alt={name} onClick={handleItemClick} />
          <div className='fav-icon'>

          <IconButton
              className={`fav-icon ${clicked === id ? "clicked" : ""}`}
              onClick={handleFavoriteClick}
              aria-label="favorite"
              style={{ transition: 'transform 0.2s ease-in-out' }}
            >
              <FavoriteIcon style={{ transform: isLiked ? "scale(1.2)" : "scale(1)" }} color={isLiked ? "error" : "default"} className='fav-icon-hover' />
            </IconButton>
          </div>
          <div className='add-card-1'onClick={handleItemClick}>
          {/* <button className="butt" style={{ "--clr": "#7808d0" }}>
    <span className="button__icon-wrapper">
      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="button__icon-svg"
        width="10"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>

      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="button__icon-svg button__icon-svg--copy"
        width="10"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
    </span>
    Explore
  </button> */}
          </div>
        </div>
      </div>
      
      <div>
        <p className='item-des'>{name}</p>
       

        <div className='price'>
          
          <p className="item-price">₹{price}</p>
          <p className="item-price-1">₹{price_1}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ListShoes;
