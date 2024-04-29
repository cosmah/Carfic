import React from "react";
import "./booking.css";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking-container">
      <h1>SERVICE BOOKING</h1>
      <form className="booking-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleMakeModel">VEHICLE MAKE / MODEL</label>
          <input type="text" id="vehicleMakeModel" name="vehicleMakeModel" required />
        </div>
        <div className="form-group">
          <label htmlFor="vin">VEHICLE IDENTIFICATION NUMBER</label>
          <input type="text" id="vin" name="vin" required />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload a document or image</label>
          <input type="file" id="fileUpload" name="fileUpload" />
        </div>

        <div className="form-group">
          <label htmlFor="serviceDate">DESCRIPTION</label>
          <input type="text" id="description" name="description" required />
        </div>

        {/* Add other form fields as needed */}
        <button type="submit">Submit Form</button>
      </form>
      {/* <Link to="/">Go Back</Link> */}
    </div>
  );
};

export default Booking;
