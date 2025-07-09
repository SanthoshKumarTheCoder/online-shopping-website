
import React, { useState } from 'react';
import ShoesItems from './ShoesItem';
import Shoe from './Shoe';

function Shoes() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]); // Cart state

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
  };

  return (
    <div>
      <Shoe category={category} setCategory={setCategory} />
      <ShoesItems addToCart={addToCart} category={category} />
    </div>
  );
}

export default Shoes;
