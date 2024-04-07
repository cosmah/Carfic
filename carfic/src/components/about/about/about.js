import React, { useState } from "react";
import "./about.css";
import Slide from "./slider";

const AboutUs = () => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <h1 className="about-us">About Us</h1>

          <p className="para">
            Carfic is a leading car service company in Uganda,
            <br /> offering a wide range of services to ensure your vehicle is
            in top condition. <br /> Our team of highly skilled professionals is
            dedicated to providing the best possible service and experience.
            <br />
            Whether you need a routine check-up, a repair, or a complete
            overhaul, Carfic is here to help. <br />
            We pride ourselves on our commitment to quality, reliability, and
            customer satisfaction. Explore our services to learn more about what
            we offer.
          </p>

          <h2 className="why">Why Choose CarfiC Automotives?</h2>
          <div className="h2">
            <ul className="bullet-list">
              <li>Expert Diagnostics</li>
              <li>Quality Repairs</li>
              <li>Timely Service</li>
              <li>Affordable Pricing</li>
              <li>Customer Satisfaction</li>
              <li>Comprehensive Services</li>
            </ul>
          </div>
        </div>
        <div className="column">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
