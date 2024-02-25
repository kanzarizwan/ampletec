import React from 'react'
import './AboutUs.css'
import img3 from './assets/img3.png'

function AboutUs() {
  return (
    <div>
               <h1 className='headings'>About us</h1>

        <div class="about-us" id="about-us-section">

    <div className="text">
        <p>Welcome to Ample Technology Inc., where reliability, innovation, and connectivity converge to redefine your communication experience. As a trailblazing telecommunication company, we take pride in being your reliable partner, committed to providing unparalleled solutions that connect you to the world with confidence.<br></br>
        <br></br>
        At Ample Technology Inc., we understand the indispensable role communication plays in your life. Our unwavering commitment to reliability ensures that our services are not just cutting-edge but also trustworthy, creating an ecosystem where every connection is as dependable as it is seamless.
        <br></br> <br></br>
        Driven by a passion for excellence, we offer a diverse range of services tailored to meet your unique communication needs. Whether it's lightning-fast internet solutions or robust mobile networks, Ample Technology Inc. is your steadfast ally in navigating the digital landscape. <br></br>
        <br></br>
        Join us on a journey where reliability is not just a promise but a cornerstone of our service. At Ample Technology Inc., we envision a future where your connections are not only seamless but also consistently dependable, amplifying the potential of individuals, businesses, and communities.<br></br>
        Experience the transformative power of reliable communication with Ample Technology Inc.</p>  <br></br>
        <h4>Your Gateway to Seamless and Dependable Connectivity.</h4>
    </div>
   
     
    <div className="sat-img">
    <img  src={img3} alt="satellite image" />
    </div>

    </div>
      
    </div>
  )
}

export default AboutUs
