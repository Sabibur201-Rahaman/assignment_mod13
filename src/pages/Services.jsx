import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Services() {
  return (
    <div>
      <ul>
      <li><NavLink className={({isActive})=>isActive?'activeItem':'pendingItem'} to='/Contact'>Contact</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'activeItem':'pendingItem'} to='/About'>About</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'activeItem':'pendingItem'} to='/Blog'>Blog</NavLink></li>
      </ul>
    </div>
  )
}

export default Services
