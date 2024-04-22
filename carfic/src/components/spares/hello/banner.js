import React from "react";
import spare from "../../../assets/image/fic/30.jpeg";
import "./baner.css";

const Baner = () => {
 return (
    <div className="banner-container">
      <div className="spare-image">
        <img src={spare} alt="Engine" />
        <h1>Your Title Here</h1>
      </div>
    </div>
 );
};

export default Baner;
