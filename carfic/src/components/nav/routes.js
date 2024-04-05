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
        <div className="close" onClick={toggleMenu}>X</div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service Center</Link></li>
        <li><Link to="/spares">Spare Parts</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="company-name"><strong>Company Name</strong></div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default RoutingComponent;