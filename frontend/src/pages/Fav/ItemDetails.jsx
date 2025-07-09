import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../components/context/Storecontext";
import Buttonn from "./Button";

function ItemDetails() {
  const { id } = useParams();
  const { list_items } = useContext(StoreContext);


  const item = list_items.find((product) => product.id === id);

  if (!item) {
    return <h2>Item not found!</h2>;
  }

  return (
    <>
    <div className="item-details">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h3>Price: ₹{item.price}</h3>
     
    </div>
    </>
  );
}

export default ItemDetails;
