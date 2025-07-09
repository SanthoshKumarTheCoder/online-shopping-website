import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

function Listitem() {
  return (
    <div>
      <div className="item-flex">
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Bag Item</p>
        </NavLink>

        <NavLink to="/shoeslist" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List shoes Item</p>
        </NavLink>
        <NavLink to="/dresslistitem" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List womens collections Item</p>
        </NavLink>

        <NavLink to="/watcheslistitem" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List mens collections Item</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Listitem;
