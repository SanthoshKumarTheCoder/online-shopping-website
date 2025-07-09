import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { StoreContext } from '../../components/context/Storecontext';
import { IoIosAdd, IoIosRemove } from "react-icons/io";


function WatchesDeatailes() {
        const { id } = useParams();
        const [item, setItem] = useState(null);
       const { cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);
       const [hovered, setHovered] = useState(false);
       const isInCart = cartItems[id];

    
   

        useEffect(() => {
          fetch(`${url}/api/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.error("Failed to fetch item:", err));
        }, [id, url]);
      
        if (!item) return <p>Loading item details...</p>;
      
        return (
          <div className="item-detail-page"  onMouseEnter={() => setHovered(true)}>
            <div className='item-deatail-left-side'>
            <img
              src={`${url}/images/${item.image}`}
              alt={item.name}
              className="item-img-left"
            /></div>
            <div className='item-deatail-right-side'>
                <div className='display-item-heading'>
            <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
            <img className='rating-img' src='/src/assets/rating_starts.webp'/>
                </div>
            <p className="mb-2 text-gray-700">{item.description}</p>
            <div className="pricee">
            <p className="item-price-2">₹{item.price}</p>
            <p className="item-price-3">₹{item.price_1}</p>
            </div>
           
            {!isInCart || !hovered ? (
          <button
            className="add-item-card-display"
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="cart-control">
            <button
              className="add-item-card-onee"
              onClick={() => removeFromCart(id)}
              aria-label="delete"
            >
              <IoIosRemove size={30} />
            </button>

            <p className="count-para">{cartItems[id]}</p>

            <button
              className="add-item-card-onee"
              onClick={() => addToCart(id)}
              aria-label="add"
            >
              <IoIosAdd size={30} />
            </button>
          </div>
        )}
            
            </div>
          </div>
        );
      }

export default WatchesDeatailes
