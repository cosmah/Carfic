import React, { useState } from "react";
import "./about.css";
import Slide from "./slider";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Parts = () => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <h1 className="about-us">GENUINE AUTO PARTS</h1>

          <p className="para">
            CarfiC Automotives is a leading supplier of genuine auto parts in
            the region. We provide a wide range of auto parts for all makes and
            models of vehicles. Our team of experts is dedicated to providing
            the best quality auto parts at affordable prices. We have a large
            inventory of auto parts in stock and can source any part that you
            need. Whether you need a replacement part for your car or truck, we
            have you covered. Contact us today for all your auto parts needs.
          </p>

          <Link to="/order">
              <Button className="button">ORDER PARTS</Button>
            </Link>
        </div>
        <div className="column">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Parts;
