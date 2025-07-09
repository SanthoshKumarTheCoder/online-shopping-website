
import React, { useState } from 'react';
import DressHeading from './DressHeading';
import DressItems from './DressItems';

function Dress() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]); // Cart state

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
  };

  return (
    <div>
      <DressHeading category={category} setCategory={setCategory} />
      <DressItems addToCart={addToCart} category={category} />
    </div>
  );
}

export default Dress;
