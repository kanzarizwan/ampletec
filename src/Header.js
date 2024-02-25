// Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='nav'>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#about-us-section">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact-us-section">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
