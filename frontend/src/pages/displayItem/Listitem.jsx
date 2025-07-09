import React, { useContext, useState } from 'react';
import { StoreContext } from '../../components/context/Storecontext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';



function Listitem({ id, name, price, image, price_1, description, category, selectedCategory }) {
  const { cartItems, favorites, toggleFavorite,url } = useContext(StoreContext);
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
      
      <div className='list-item '  style={{ cursor: 'pointer' }}>
        <div>
          <div className='main-1'>
            <img className='item-img main_img-2'  src={`${url}/images/${image}`} alt={name} onClick={handleItemClick}/>
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
              {/* {!cartItems[id] ? (
                <button className='deleted add-item-card-one' onClick={() => addToCart(id)} aria-label="add">
                  <IoIosAdd size={20} /> 
                </button>
              ) : (
                <div className="cart-controls">
                  <button className='deleted add-item-card-one' onClick={() => removeFromCart(id)} aria-label="delete">
                    <IoIosRemove size={20} />
                  </button>
                  <p className='count'>{cartItems[id]}</p>
                  <button className='deleted add-item-card-one' onClick={() => addToCart(id)} aria-label="add">
                    <IoIosAdd size={20} />
                  </button>
                </div>
              )} */}

              
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
          {/* <button className="but">
      <div className="text">
        <span>Add</span>
        <span>to</span>
        <span>Card</span>
      </div>
      <div className="clone">
      <span>Add</span>
        <span>to</span>
        <span>Card</span>
      </div>
      <svg
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button> */}
    
        
         
        </div>
      </div>
    </div>
  );
}

export default Listitem;
