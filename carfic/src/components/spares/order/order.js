import React from "react";
import "./order.css";
import { useForm, ValidationError } from '@formspree/react';

const Order = () => {

  const [state, handleSubmit] = useForm("xwkgyjdp");
  if (state.succeeded) {
    return (
      <Order />
    );
  }

  return (
    <div className="order-parts-form">
      <h1 className="form-title">ORDER PARTS</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-column">
          <label htmlFor="firstName">FIRST NAME *</label>
          <input
            type="text"
            name="firstName"
            required
            className="input-field"
          />
          <ValidationError 
        prefix="FirstName" 
        field="firstName"
        errors={state.errors}
      />

          <label htmlFor="lastName">LAST NAME *</label>
          <input
            type="text"
            name="lastName"
            required
            className="input-field"
          />
          <ValidationError 
        prefix="LastName" 
        field="lastName"
        errors={state.errors}
      />

          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

          <label htmlFor="phone">PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="input-field"
          />
          <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
        </div>

        <div className="form-column">
          <label htmlFor="vehicleMakeModel">VEHICLE MAKE / MODEL</label>
          <input
            type="text"
            name="vehicleMakeModel"
            className="input-field"
          />
          <ValidationError 
        prefix="vehicleMakeModel" 
        field="vehicleMakeModel"
        errors={state.errors}
      />

          <label htmlFor="vehicleYear">VEHICLE YEAR</label>
          <input
            type="number"
            name="vehicleYear"
            className="input-field"
          />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

          <label htmlFor="vin">VEHICLE IDENTIFICATION NUMBER</label>
          <input
            type="text"
            name="vin"
            className="input-field"
          />
          <ValidationError 
        prefix="Vin" 
        field="vin"
        errors={state.errors}
      />

          <label htmlFor="partsNeeded">SPECIFY THE PARTS NEEDED</label>
          <textarea
            name="partsNeeded"
            placeholder="Specify the parts needed"
            rows="4"
            className="input-field"
          ></textarea>
          <ValidationError 
        prefix="partsNeeded" 
        field="partsNeeded"
        errors={state.errors}
      />
        </div>

        <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </form>
    </div>
  );
};
// eslint-disable-next-line
function App() {
  return (
    <Order />
  );
}

export default Order;
