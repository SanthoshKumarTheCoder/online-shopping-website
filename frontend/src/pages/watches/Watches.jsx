
import React, { useState } from 'react';
import WatchesHeading from './WatchesHeading';
import WatchesItems from './WatchesItems';

function Watches() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]); // Cart state

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
  };

  return (
    <div>
      <WatchesHeading category={category} setCategory={setCategory} />
      <WatchesItems addToCart={addToCart} category={category} />
    </div>
  );
}

export default Watches;
