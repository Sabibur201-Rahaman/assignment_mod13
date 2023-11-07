import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Services() {
  return (
    <div>
      <ul>
      <li><Link to='/'>Contact</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Blog'>Blog</Link></li>
      </ul>
    </div>
  )
}

export default Services
