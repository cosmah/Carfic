import React from "react";
import "./banner.css";
import lubs from "../../../assets/image/home.jpeg";

const Banner = () => {
  return (
    <div className="container-fluid my-5">
      <h2 className="text-center mb-4">Why Our Company?</h2>
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
