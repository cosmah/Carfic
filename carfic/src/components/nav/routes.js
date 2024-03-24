// carfic/src/components/nav/routes.js
import React from "react";
import { Link } from 'react-router-dom'; // Corrected import
import "./routes.css";

const RoutingComponent = () => {
 return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/spares">Spare Parts</Link>
        </li>
      </ul>
    </nav>
 );
};

export default RoutingComponent;
