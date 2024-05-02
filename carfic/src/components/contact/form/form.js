// Form.js
import React, { useState } from "react";
import "./form.css"; // Import the CSS file
import { db } from "../../../firebase";

const Form = () => {

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
      method="post"
      data-netlify="true"
      onSubmit="submit"
      style={{
        backgroundColor: "#bdbcbc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >

      <input type="hidden" name="form-name" value="contact v1" />

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
          I accept the privacy policy
        </label>
        <div></div>
        <div></div>
        <Button type="submit" style={{ alignSelf: "flex-start" }}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
