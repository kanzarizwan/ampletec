import { useState } from 'react'
import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactLinkClick = () => {
    setShowContactForm(true);
  };

  const handleContactFormClose = () => {
    setShowContactForm(false);
  };
  return (
    <div>
      <h1 className='headings'  id="contact-us-section">Contact us</h1>

      <div class="contact-toolbar">

    <div>

    </div>
    <div class="contact-info">
      <div class="contact-icon">📞</div>
      <div class="contact-links">
        <a href="tel:+123456789">TBA</a>
      </div>
    </div>
    
    <div class="contact-info">
      <div class="contact-icon">✉️</div>
      <div class="contact-links">
        <a href="mailto:rizwan@ampletechnology.ca">Email</a>
      </div>
    </div>

    <div class="contact-info">
      <div class="contact-icon"><i class="fab fa-facebook"></i></div>
      <div class="contact-links">
        <a href="https://www.facebook.com/example" target="_blank">Facebook</a>
      </div>
    </div>

    <div class="contact-info">
      <div class="contact-icon"><i class="fab fa-linkedin"></i></div>
      <div class="contact-links">
        <a href="https://www.linkedin.com/in/example" target="_blank">LinkedIn</a>
      </div>

    </div>
    <div className="contact-info">
          <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
          <div className="contact-links">
            <a onClick={handleContactLinkClick}>Contact Form</a>
          </div>
        </div>

        {showContactForm && <ContactForm onClose={handleContactFormClose} />}
    
    </div>
    </div>
  )
}

export default Contact
