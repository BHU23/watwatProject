import React from 'react'
import '../css/navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    } from "react-router-dom";
export default function Navbar() {
  return (
    <div className='horizontal-menu'>
      <NavLink to="./creator"></NavLink>
      <NavLink to="./user"></NavLink>
      <NavLink to="./admin"></NavLink>
      <NavLink to="./search"></NavLink>
        <ul>
          
        </ul>
    </div>
  )
}
