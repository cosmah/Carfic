import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="order-parts-form">
      <h1 className="form-title">ORDER PARTS</h1>
      <form className="form-container">
        <div className="form-column">
          <label htmlFor="firstName">FIRST NAME *</label>
          <input
            type="text"
            id="firstName"
            required
            className="input-field"
          />

          <label htmlFor="lastName">LAST NAME *</label>
          <input
            type="text"
            id="lastName"
            required
            className="input-field"
          />

          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input-field"
          />

          <label htmlFor="phone">PHONE NUMBER</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="input-field"
          />
        </div>

        <div className="form-column">
          <label htmlFor="vehicleMakeModel">VEHICLE MAKE / MODEL</label>
          <input
            type="text"
            id="vehicleMakeModel"
            className="input-field"
          />

          <label htmlFor="vehicleYear">VEHICLE YEAR</label>
          <input
            type="number"
            id="vehicleYear"
            className="input-field"
          />

          <label htmlFor="vin">VEHICLE IDENTIFICATION NUMBER</label>
          <input
            type="text"
            id="vin"
            className="input-field"
          />

          <label htmlFor="partsNeeded">SPECIFY THE PARTS NEEDED</label>
          <textarea
            id="partsNeeded"
            placeholder="Specify the parts needed"
            rows="4"
            className="input-field"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          SUBMIT FORM
        </button>
      </form>
    </div>
  );
};

export default Order;
