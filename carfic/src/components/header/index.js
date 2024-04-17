// index.js
import React, { useState, useEffect } from 'react';
import './index.css';
import cranks from '../../assets/image/cranks.png';
import lubs from '../../assets/image/lubs.png';
import mec from '../../assets/image/mec.png';
import spares1 from '../../assets/image/spares1.png';
import { Link } from "react-router-dom";

const Header = () => {
 const images = [cranks, lubs, mec, spares1];
 const slogans = [
     "Experience the best automotive services",
     "Your trusted partner for automotive needs",
     "Quality and reliability in every service",
     "Driving your dreams forward",
 ];
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
 
 useEffect(() => {
     const timer = setInterval(() => {
       setCurrentImageIndex((currentImageIndex + 1) % images.length);
       setCurrentSloganIndex((currentSloganIndex + 1) % slogans.length);
     }, 5000);
     
     return () => clearInterval(timer);
 }, [currentImageIndex, currentSloganIndex, images.length, slogans.length]);
 
 return (
    <div className="banner">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="carousel"
          className={index === currentImageIndex ? 'active' : ''}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "placeholder.jpg";
          }}
        />
      ))}
      <div className="slogan-container">
        {slogans.map((slogan, index) => (
          <h2 key={index} style={index === slogans.length - 1 ? {fontWeight: 'bold'} : {}}>{slogan}</h2>
        ))}
        <Link to="/services">
          <button className="cta-button">BOOK A SERVICE</button>
        </Link>
      </div>
    </div>
 );
}

export default Header;