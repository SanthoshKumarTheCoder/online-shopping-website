import React, { useState } from 'react';
import DisplayItem from './displayItem/DisplayItem';
import Items from './displayItem/Items';

function Shop() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]); // Cart state

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
  };

  return (
    <div>
      <DisplayItem category={category} setCategory={setCategory} />
      <Items addToCart={addToCart} category={category} />
    </div>
  );
}

export default Shop;
