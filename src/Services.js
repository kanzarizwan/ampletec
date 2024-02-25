import React from 'react'
import './Services.css'
import logo from './assets/img2.webp'

function Services() {


  return (
    <div>
    <h1 className='headings'  id="services">Services</h1>
    <div className="card-container">
        <div className="card">
        <img src={logo} alt="Card Image" />
        <div className="card-content">
          <h3>Whole sale voice</h3>
          <p>ble bleh</p>
        </div>
      </div>


      <div className="card">
        <img src={logo} alt="Card Image" />
        <div className="card-content">
          <h3>Retail voice</h3>
          <p>ble bleh</p>
        </div>
      </div>

      <div className="card">
        <img src={logo} alt="Card Image" />
        <div className="card-content">
          <h3>Call center</h3>
          <p>ble bleh</p>
        </div>
      </div>
    </div>

    
    </div>
  )
}

export default Services
