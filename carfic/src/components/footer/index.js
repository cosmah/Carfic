// index.js
import React from 'react';
import './index.css';

const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-content">
        <div className='logo'>
          <h4>Carfic </h4>
        </div>
        
        <div className="footer-section links">
          <ul>
            <a href="#"><li>Service Center</li></a>
            <a href="#"><li>Auto Parts</li></a>
            <a href="#"><li>About us</li></a>
            <a href="#"><li>Appointment</li></a>
            <a href="#"><li>Blog</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <div className="talk-section links">
        <p>Trust us for a thorough and reliable automotive experience</p>
        </div>

        <div className="contact-section links">
          
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +256 20 546 5930</span>
            <span><i className="fas fa-phone"></i> &nbsp; +256 39 324 8791</span>
            <span><i className="fas fa-envelope"></i> &nbsp; care@axlefoley.com</span>
            <span><i className="fas fa-map-marker-alt"></i> &nbsp; Plot 586, Kira - Kasangati Road</span>
          </div>
          <div className="hours">
            <p>Monday - Friday: 08:00 - 17:00</p>
            <p>Saturday: 08:00 - 13:00</p>
            <p>Sundays & Public Holidays Closed</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Axle Foley Autohouse. All rights reserved.</p>
      </div>
    </footer>
 );
};

export default Footer;