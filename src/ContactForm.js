
import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = ({ onClose }) => {
  const [showContactForm, setShowContactForm] = useState(true);

  const handleClose = () => {
    setShowContactForm(false);
    onClose();
  };

  return (
    <>
      {showContactForm && (
        <div className="form-popup">
          <form action="https://formspree.io/your-email" method="POST">
          <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message" required />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
