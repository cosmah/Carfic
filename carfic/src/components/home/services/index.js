import React from "react";
import "./index.css";
import engine from "../../../assets/image/engine.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-image">
        <img src={engine} alt="Engine" />
      </div>
      <div className="service-text">
        <h1>GENUINE ENGINE PARTS</h1>
        <p className="service-description">
          Enjoy peace of mind knowing that your vehicle is in good hands with
          our genuine engine parts. Contact us today to learn more about our
          services and how we can help you maintain the performance and
          reliability of your vehicle.
        </p>
        <Link to="/services">
          <Button className="service-button">GET IN TOUCH</Button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
