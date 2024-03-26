// index.js
import React, { useState, useEffect } from 'react';
import './index.css';
import cranks from '../../assets/image/cranks.png';
import lubs from '../../assets/image/lubs.png';
import mec from '../../assets/image/mec.png';
import spares1 from '../../assets/image/spares1.png';

const Header = () => {
 const images = [cranks, lubs, mec, spares1];
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Clean up on component unmount
 }, [currentImageIndex, images.length]);

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
    </div>
 );
};

export default Header;