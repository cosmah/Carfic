// Form.js
import React, { useState } from 'react';
import './form.css'; // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <textarea
        name="message"
        placeholder="Message*"
        required
        value={formData.message}
        onChange={handleChange}
        className="textarea-field"
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="acceptPolicy"
          checked={formData.acceptPolicy}
          onChange={handleChange}
          className="checkbox-field"
        />
        I accept the privacy policy
      </label>
      <button type="submit" className="submit-button">
        Send
      </button>
    </form>
  );
};

export default Form;
