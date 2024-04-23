import React from "react";
import spare from "../../../assets/image/spares1.png";
import "./baner.css";

const Baner = () => {
 return (
    <div className="banner-container">
      <div className="spare-image">
        <img src={spare} alt="Engine" />
        <h1 style={{ fontSize: '50px' }}>Auto Parts</h1>
      </div>
    </div>
 );
};

export default Baner;
