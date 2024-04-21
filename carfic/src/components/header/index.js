// index.js
import React, { useState, useEffect } from "react";
import "./index.css";
import cranks from "../../assets/image/cranks.png";
import lubs from "../../assets/image/lubs.png";
import mec from "../../assets/image/mec.png";
import spares1 from "../../assets/image/spares1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const images = [cranks, lubs, mec, spares1];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="carousel"
          className={index === currentImageIndex ? "active" : ""}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "placeholder.jpg";
          }}
        />
      ))}
      <div className="slogans">
        <div className="paragraph">
          <p>Experience the best automotive services</p>
          <p>Your trusted partner for automotive needs</p>
          <p>Quality and reliability in every service</p>
          <p className="emphasis">Driving your dreams forward</p>
        </div>
        <Link to="/services">
          <button className="book-service-btn">Book a Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
