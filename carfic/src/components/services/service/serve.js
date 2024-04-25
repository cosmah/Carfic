import React from "react";
import "./serve.css";
import Slide from "./slider";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Serve = () => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <h1 className="about-us">Service & Auto Repair </h1>

          <p className="para">
            We pride ourselves on offering a wide range of high-quality services
            designed to meet your unique needs. Our dedicated team is committed
            to providing exceptional customer care. We work tirelessly to ensure
            your experience with us is nothing short of excellent. Your
            satisfaction is our top priority, and we're always here to help.
            Explore our services today and discover why we're a trusted provider
            for many.
          </p>
          <div
            className="service-container"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div
              style={{
                flex: "100%",
                "@media(min-width: 600px)": {
                  flex: "50%",
                },
              }}
            >
              <ul style={{ listStyleType: "none" }}>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Auto Parts Sales
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Oil And Fluids Services
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Computerised Diagnostic Services
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Mechanical Inspections
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ General Inspection
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Engine And Gearbox/Transmission Repairs
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Brakes & Suspension
                </li>
              </ul>
            </div>
            <div
              style={{
                flex: "100%",
                "@media(min-width: 600px)": {
                  flex: "50%",
                },
              }}
            >
              <ul style={{ listStyleType: "none" }}>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ AC Repair & Service
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Vehicle Accessories
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Vehicle Pickup & Drop Off Service
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Battery Charger & Mobile Jump Starter Services
                </li>
                <li
                  style={{
                    paddingLeft: "3em",
                    textIndent: "-1em",
                    fontSize: "20px",
                  }}
                >
                  ➤ Auto Car Deluxe Wash
                </li>
              </ul>
            </div>
          </div>

          <Link to="/booking">
            <Button className="button">BOOK A SERVICE</Button>
          </Link>
        </div>
        <div className="column">
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Serve;
