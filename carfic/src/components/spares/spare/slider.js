
    
import React, { useState, useEffect } from 'react';

import car from '../../../assets/image/fic/76.jpeg';
import spare from '../../../assets/image/fic/11.jpeg';
import mec from '../../../assets/image/fic/60.jpeg';
import garage from '../../../assets/image/fic/79.jpeg';
import tech from '../../../assets/image/fic/spare77.jpeg';
import engine from '../../../assets/image/fic/egn1.jpeg';
import body from '../../../assets/image/fic/cbody.jpeg';

const Slide = () => {
    const images = [car, spare, mec, garage,tech,engine, body];
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