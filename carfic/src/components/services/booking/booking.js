import React, { useState } from "react";
import "./booking.css";
import {db} from '../../../firebase';


const Booking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleMakeModel, setVehicleMakeModel] = useState("");
  const [vin, setVin] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
  
    db.collection('bookings').add({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      vehicleMakeModel: vehicleMakeModel,
      vin: vin,
      fileUpload: fileUpload,
      description: description, // use description instead of setDescription
    })
    .then(()=>{
      alert("Message has been submitted successfully.")
    })
    .catch((error)=>{
      alert(error.message);
    });
  
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setVehicleMakeModel("");
    setVin("");
    setFileUpload("");
    setDescription("");
  }

  return (
    <div className="booking-container">
      <h1>SERVICE BOOKING</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleMakeModel">VEHICLE MAKE / MODEL</label>
          <input
            type="text"
            id="vehicleMakeModel"
            name="vehicleMakeModel"
            required
            value={vehicleMakeModel}
            onChange={(e) => setVehicleMakeModel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vin">VEHICLE IDENTIFICATION NUMBER</label>
          <input
            type="text"
            id="vin"
            name="vin"
            required
            value={vin}
            onChange={(e) => setVin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload a document or image</label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            value={fileUpload}
            onChange={(e) => setFileUpload(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">DESCRIPTION</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Add other form fields as needed */}
        <button type="submit">Submit Form</button>
      </form>
      {/* <Link to="/">Go Back</Link> */}
    </div>
  );
};

export default Booking;
