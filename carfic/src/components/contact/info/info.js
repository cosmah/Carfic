
  import React from "react";
import "./info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Info = () => {
  return (
    <div className="contact-us">
      <h1>Contact us</h1>
      <p className="subheading">
        Trust us for a thorough and reliable automotive experience
      </p>
      <address>
        Plot 586, Kira - Kasangati Road
        <br />
        Monday - Friday: 08:00 - 17:00
        <br />
        Saturday: 08:00 - 13:00
        <br />
        Sundays & Public Holidays Closed
      </address>
      <p className="phone-numbers">
        +256 20 546 5930
        <br />
        +256 39 324 8791
      </p>
      <p className="email">care@axlefoley.com</p>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </div>
  );
};

export default Info;
