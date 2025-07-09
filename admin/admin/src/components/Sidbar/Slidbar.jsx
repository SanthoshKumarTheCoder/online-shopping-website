import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidbar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
        <NavLink to='/item' className="sidebar-option">
            <img src={assets.add_icon} alt=''/>
            <p>Add  Item</p>
            </NavLink>
       
            <NavLink to='/shoesitem' className="sidebar-option">
            <img src={assets.order_icon} alt=''/>
            <p>List Items</p>
            </NavLink>
            <NavLink to='/order' className="sidebar-option">
            <img src={assets.order_icon} alt=''/>
            <p>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidbar