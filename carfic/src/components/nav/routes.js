import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route, Link } from 'react-router-dom';
import Home from '../home/index'; // Corrected path
import About from '../about/index'; // Corrected path
import Contact from '../contact/index'; // Corrected path
import Services from '../services/index'; // Corrected path
import Header from '../header/index'; // Corrected path
import Footer from '../footer/index'; // Corrected path
import Spare from '../spares/index'; // Corrected path

const RoutingComponent = () => {
  return (
    <Router>
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
          <li>
            <Link to="/header">Header</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full h-screen flex flex-col">
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spares" element={<Spare />} />
          <Route path="*" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </RouterRoutes>
      </div>
    </Router>
  );
}

export default RoutingComponent;