// routes.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./routes.css";
import logo from "../../assets/image/fic/logo2.png";

const RoutingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
          <img src={logo} alt="Logo" /> {/* Replace placeholder with logo */}
        </Link>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <div className="close" onClick={toggleMenu}>
          X
        </div>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <span>Service Center</span>
          </Link>
        </li>
        <li>
          <Link to="/spares">
            <span>Spare Parts</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
      {/* <div className="company-name">
        <strong>Carfic AutoRepairs</strong>
      </div> */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default RoutingComponent;
