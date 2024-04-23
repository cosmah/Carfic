// index.js
import React from "react";
import "./index.css";
import logo from "../../assets/image/services-6.png"; // Correcting the path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Column */}
        <div className="footer-column logo-column">
          <div className="logo">
            <img src={logo} alt="Carfic Logo" />
          </div>
        </div>

        {/* Links Column */}

        <div className="footer-column links-column">
          <div className="footer-section links">
            <h5>Quick links</h5>
            <ul>
              <li>
                <Link to="/services">Service Center</Link>
              </li>
              <li>
                <Link to="/spares">Auto Parts</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Appointment</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Column */}
        <div className="footer-column mission-column">
          <div className="footer-section mission">
            <h5>Mission</h5>
            <p>Trust us for a thorough and reliable automotive experience</p>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-column contact-column">
          <div className="footer-section contact-section">
            <h5>Contact</h5>
            <div className="contact">
              <span>
                <i className="fas fa-phone"></i> &nbsp; +256 786 912172
              </span>
              <span>
                <i className="fas fa-phone"></i> &nbsp; +256 757326751
              </span>
              <span>
                <i className="fas fa-envelope"></i> &nbsp; care@carfic.com
              </span>
              <span>
                <i className="fas fa-map-marker-alt"></i> &nbsp; Kireka Town, Kampala Uganda
              </span>
            </div>
            <div className="hours">
              <p>Monday - Friday: 08:00 - 17:00</p>
              <p>Saturday: 08:00 - 13:00</p>
              <p>Sundays & Public Holidays Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="copyright">
          <p>© 2024 Carfic Autohouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
