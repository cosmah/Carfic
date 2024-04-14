
    
import React, { useState, useEffect } from 'react';

import car from '../../../assets/image/fic/4.jpeg';
import spare from '../../../assets/image/fic/11.jpeg';
import mec from '../../../assets/image/fic/19.jpeg';
import garage from '../../../assets/image/fic/12.jpeg';
import tech from '../../../assets/image/fic/29.jpeg'

const Slide = () => {
    const images = [car, spare, mec, garage,tech];
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

export default Slide;