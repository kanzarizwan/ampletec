import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = ({ onClose }) => {
  const [showContactForm, setShowContactForm] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleClose = () => {
    setShowContactForm(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while sending the email.');
    }
  };

  return (
    <>
      {showContactForm && (
        <div className="form-popup">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>
              Close
            </button>
            <p>{status}</p>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
