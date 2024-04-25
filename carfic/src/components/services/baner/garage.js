import React from 'react';
import './garage.css';
import spare from "../../../assets/image/fic/29.jpeg";
  
  const Garage = () =>  {
	return (
	  <div className="banner-container">
      <div className="spare-image">
        <img src={spare} alt="Engine" />
        <h1 style={{ fontSize: '50px', fontWeight: 'bolder' }}>SERVICE CENTER</h1>
      </div>
    </div>
	);
  }
  
  export default Garage;
  