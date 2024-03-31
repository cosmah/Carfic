import React from "react";
import "./banner.css";
import lubs from "../../../assets/image/home.jpeg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="banner-row">
        <div className="row">
          <div className="col-md-6 text-div">
            <h4>Quality Service</h4>
            <p>
              We provide top-notch service to ensure your vehicle is in the best
              condition.
            </p>
            <h4>Expertise</h4>
            <p>
              Our team of experts is dedicated to providing you with the best
              solutions for your vehicle.
            </p>
            <h4>Customer Satisfaction</h4>
            <p>
              We prioritize your satisfaction and strive to exceed your
              expectations.
            </p>
            <Link to="/services">
              <Button className="button">LEARN MORE</Button>
            </Link>
          </div>
          <div className="col-md-6 image-div">
            <img src={lubs} alt="Company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
