import React from "react";
import "./booking.css";
import { useForm, ValidationError } from "@formspree/react";

const Booking = () => {
  const [state, handleSubmit] = useForm("mjvnldqr");
  if (state.succeeded) {
    return <Booking />;
  }

  return (
    <div className="booking-container">
      <h1>SERVICE BOOKING</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
          <ValidationError
            prefix="FirstName"
            field="firstName"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
          <ValidationError
            prefix="LastName"
            field="lastName"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <input type="tel" id="phone" name="phone" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleMakeModel">VEHICLE MAKE / MODEL</label>
          <input
            type="text"
            id="vehicleMakeModel"
            name="vehicleMakeModel"
            required
          />
          <ValidationError
            prefix="VehicleMakeModel"
            field="vehicleMakeModel"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vin">VEHICLE IDENTIFICATION NUMBER</label>
          <input type="text" id="vin" name="vin" required />
          <ValidationError prefix="Vin" field="vin" errors={state.errors} />
        </div>
        {/* <div className="form-group">
          <label htmlFor="fileUpload">Upload a document or image</label>
          <input type="file" id="fileUpload" name="fileUpload" />
          <ValidationError
            prefix="FileUpload"
            field="fileUpload"
            errors={state.errors}
          />
        </div> */}

        <div className="form-group">
          <label htmlFor="description">DESCRIPTION</label>
          <input type="text" id="description" name="description" required />
          <ValidationError
            prefix="description"
            field="description"
            errors={state.errors}
          />
        </div>

        {/* Add other form fields as needed */}
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {/* <Link to="/">Go Back</Link> */}
    </div>
  );
};
// eslint-disable-next-line
function App() {
  return <Booking />;
}

export default Booking;
