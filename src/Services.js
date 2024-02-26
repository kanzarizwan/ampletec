import React from 'react'
import './Services.css'
import img1 from './assets/inboundoutbound.svg'
import img2 from './assets/wholesale.png'
import img3 from './assets/voip.png'

function Services() {


  return (
    <div>
    <h1 className='headings'  id="services">Services</h1>
    <div className="card-container">
        <div className="card">
        <img src={img1} alt="Card Image" />
        <div className="card-content">
          <h3>Inbound and Outbound Call Services</h3>
          <p>Elevate your communication strategy with our comprehensive Call Services, expertly tailored to deliver superior customer support, ensuring heightened engagement and satisfaction.</p>
        </div>
      </div>


      <div className="card">
        <img src={img2} alt="Card Image" />
        <div className="card-content">
          <h3>Voice Termination services and Bulk Minutes Packages</h3>
          <p> Infrastructure for routing wholesale voice calls, and Bulk Minutes Packages for high-volume users, optimizing connectivity for telecom carriers and enterprises.</p>
        </div>
      </div>

      <div className="card">
        <img src={img3} alt="Card Image" />
        <div className="card-content">
          <h3>Voip Services</h3>
          <p>Experience crystal-clear communication with our VoIP (Voice over Internet Protocol) services, revolutionizing voice connectivity over the internet for enhanced reliability and flexibility.</p>
        </div>
      </div>
    </div>

    
    </div>
  )
}

export default Services
