import React from 'react';
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import '../css/header.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
NavLink,
} from "react-router-dom";
import Logout from './bnt/logout';
import NavbarUser from '../navbar/navbarUser';
import NavbarCreater from '../navbar/navbarCreater';
function Header() {
  return (
    <header>
        <div className='headertop'>
          <Link to="./sharch" className='logo'>
            <img src={logo} alt="Logo" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
            <span style={{ padding: "20px", fontWeight:"600", fontSize:"30px"}}>Wat Wat</span>
          </Link>
          <div className="horizontal">
          <NavbarUser />
          <NavbarCreater/>
          </div>
          <div className='bnt-menu'>
            <Logout/>
          </div>
          <div className="proflie">
            <img src={avatar} alt="Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
          </div>
        </div>
          <div className='line'></div>
      </header>
  ); 
}

export default Header;
