import React from "react";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/product'>Product</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
      </ul>
    </div>
  );
}
export default Menu;