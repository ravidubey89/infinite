import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu]=useState(false)
  const toggleMenu =()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }
  return (
    <div className="nav-row">
      <nav className="container">
      <span className="logo">INFINITE EPICENTER</span>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          
          <Link to="/careers">Carriers</Link>
        </li>
        <li>
         
         <Link to="/service">Services</Link>
       </li>
        <li>
         
          <Link to="/about">About</Link>
        </li>
        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <img onClick={toggleMenu} className="menu-icon" src="/menu-icon.png" />
    </nav>
    </div>
  );
};

export default Navbar;
