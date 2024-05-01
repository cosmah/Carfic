import React, { useState } from "react";
import "./booking.css";
// import { db } from "../../../firebase";

const Booking = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [vehicleMakeModel, setVehicleMakeModel] = useState("");
//   const [vin, setVin] = useState("");
//   const [fileUpload, setFileUpload] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit =(e) => {
//     e.preventDefault();
  
//     db.collection('bookings').add({
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       phone: phone,
//       vehicleMakeModel: vehicleMakeModel,
//       vin: vin,
//       fileUpload: fileUpload,
//       description: description, // use description instead of setDescription
//     })
//     .then(()=>{
//       alert("Message has been submitted successfully.")
//     })
//     .catch((error)=>{
//       alert(error.message);
//     });
  
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPhone("");
//     setVehicleMakeModel("");
//     setVin("");
//     setFileUpload("");
//     setDescription("");
//   }

  return (
    <div className="booking-container">
      <h1>SERVICE BOOKING</h1><form action="https://submit-form.com/ylQT4ywsE">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name" required="" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" required="" />
  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Message"
    required=""
  ></textarea>
  <button type="submit">Send</button>
</form>

    </div>
  );
};

export default Booking;
