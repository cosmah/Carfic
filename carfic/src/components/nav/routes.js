// routes.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./routes.css";

const RoutingComponent = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

 return (
    <nav className="nav-bar">
      <div className="logo">Logo</div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/spares">Spare Parts</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
 );
};

export default RoutingComponent;
