/* eslint-disable no-unused-vars */
// Form.js
import React, { useState } from "react";
import "./form.css"; // Import the CSS file
import { useForm, ValidationError } from '@formspree/react';


const Form = () => {

  const [state, handleSubmit] = useForm("mgegdrpe");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const Button = ({ children, ...props }) => {
    return (
      <button
        {...props}
        style={{
          backgroundColor: "rgb(231, 116, 10);",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    );
  };


  return (
    <form
      name="contact v1"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#bdbcbc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          
          style={{
            flex: "1",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
            opacity: "0.8",
          }}
        />
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          
          style={{
            flex: "1",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
            opacity: "0.8",
          }}
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          
          style={{
            flex: "1",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
            opacity: "0.8",
          }}
        />
        <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      </div>
      <textarea
        name="message"
        placeholder="Message*"
        required
        
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
          opacity: "0.8",
        }}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input
            type="checkbox"
            name="acceptPolicy"
          
            style={{ marginRight: "10px" }}
          />
          <ValidationError 
        prefix="AcceptPolicy" 
        field="acceptPolicy"
        errors={state.errors}
      />
          I accept the privacy policy
        </label>
        <div></div>
        <div></div>
        <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
};

function App() {
  return (
    <ContactForm />
  );
}

export default Form;
