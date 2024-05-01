// Form.js
import React, { useState } from "react";
import "./form.css"; // Import the CSS file
import { db } from "../../../firebase";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

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
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
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
        value={formData.message}
        onChange={handleChange}
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
            checked={formData.acceptPolicy}
            onChange={handleChange}
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
