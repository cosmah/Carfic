import React, { useState } from 'react';
import './about.css';

const AboutUs = () => {
 const images = [
    "carfic\\src\\assets\\image\\fic\\5.jpeg",
    "carfic\\src\\assets\\image\\fic\\20.jpeg",
    "carfic\\src\\assets\\image\\fic\\43.jpeg",
    "carfic\\src\\assets\\image\\fic\\37.jpeg",
    "carfic\\src\\assets\\image\\fic\\34.jpeg"
 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
 };

 const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
 };

 return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>  
      <div className="row">
        <div className="column">
          <p>Some text...</p>
        </div>
        <div className="column">
          <button onClick={prevImage}>Previous</button>
          <img src={images[currentImageIndex]} alt="Slide" />
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
 );
}

export default AboutUs;