import React, { useState } from 'react';
import './index.css';
import cranks from '../../assets/image/cranks.png';
import lubs from '../../assets/image/lubs.png';
import mec from '../../assets/image/mec.png';
import spares1 from '../../assets/image/spares1.png';

const Header = () => {
  const images = [cranks, lubs, mec, spares1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      
      <div>
        <button onClick={previousImage}>Previous</button>
        <img src={images[currentImageIndex]} alt="carousel" onError={(e)=>{e.target.onerror = null; e.target.src="placeholder.jpg"}} />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Header;