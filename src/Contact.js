import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <h1 className='headings'  id="contact-us-section">Contact us</h1>

      <div class="contact-toolbar">

    <div>

    </div>
    <div class="contact-info">
      <div class="contact-icon">📞</div>
      <div class="contact-links">
        <a href="tel:+123456789">+1 (234) 567-89</a>
      </div>
    </div>
    
    <div class="contact-info">
      <div class="contact-icon">✉️</div>
      <div class="contact-links">
        <a href="mailto:info@example.com">info@example.com</a>
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
    </div>
    </div>
  )
}

export default Contact
