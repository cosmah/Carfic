import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
  Link,
} from "react-router-dom";

import "./routes.css";

const RoutingComponent = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about" className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/services" className="nav__link">
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/spares" className="nav__link">
                Spare Parts
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/footer" className="nav__link nav__cta">
                Footer
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default RoutingComponent;
