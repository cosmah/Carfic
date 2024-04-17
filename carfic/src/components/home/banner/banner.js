
  import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="banner-row">
        <div className="row">
          <div className="col-md-6 text-div">
            <h1> WHY CARFIC AUTO GARAGE ?</h1>
            <p style={{paddingLeft: '20px', padding: '10px'}}>
  Carfic Automotives is proud to be an automotive leader in
  Uganda, offering a wide range of new and certified pre-owned
  vehicles at competitive prices. We are committed to providing our
  customers with the best possible service and experience, and we
  are proud to have a team of highly skilled and experienced
  professionals who are always on hand to help.{" "}
</p>
            <Link to="/services">
              <Button className="button">LEARN MORE</Button>
            </Link>
          </div>
          <div className="col-md-6 image-div">
            {/* <img src={lubs} alt="Company" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
