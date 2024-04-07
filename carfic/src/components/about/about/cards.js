import React from "react";
import "./cards.css";

const Cardz = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Mission</h2>
        <p>
          Our mission is to provide high quality services to our customers and
          to be the leading provider in the industry.
        </p>
      </div>
      <div className="card">
        <h2>Vision</h2>
        <p>
          Our vision is to innovate and expand our services to reach a wider
          audience and to make a positive impact in the community.
        </p>
      </div>
      <div className="card">
        <h2>Core Values</h2>
        <ul className="core-values-list">
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
        </ul>
      </div>
    </div>
  );
};

export default Cardz;
