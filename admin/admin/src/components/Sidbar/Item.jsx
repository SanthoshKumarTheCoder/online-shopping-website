import React from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

function Item() {
  return (
    <div>
      <div className="item-flex">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Bag Item</p>
        </NavLink>

        <NavLink to="/addshoes" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add shoes Item</p>
        </NavLink>
        <NavLink to="/dressItemUpload" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add womens Item</p>
        </NavLink>
        <NavLink to="/menItemUpload" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add mens Item</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Item;
