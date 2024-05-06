
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
      Kireka Town, Kampala, Uganda
        <br />
        Monday - Friday: 08:00 am - 06:00 pm
        <br />
        Saturday, 8 am – 6:30 pm
        <br />
        Sunday, 8:30 am – 3 pm
      </address>
      <p className="phone-numbers">
        +256 786912172
        <br />
       +256  757326751
      </p>
      <p className="email">care@carfic.com</p>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100088565874953"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/home?utm_source=liteAPK&utm_medium=shortcut&first_run=false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/carfic_automotive_?utm_source=qr&igsh=MzNlNGNkZWQ4Mg=="
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
          href="https://www.tiktok.com/@monfickiss?_t=8m7fQQYUJeQ&_r=1"
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
