import React, {useState, useEffect} from 'react';
import Header from './Header';
import img2 from './assets/img2.jpeg'
import logo from './assets/logo.png'
import './App.css'
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Header/>
      <div >
         <img className='logo-img' src={logo} alt="Logo image" />
      </div>
    

      <div className='center-panel'  id="home">
        <img className='side-img' src={img2} alt="Side image" />
        <h1 className='main-info'> Seamless Communication, Limitless Possibilities.</h1>
      </div>
    <AboutUs/>

    <Services />
     

    <Contact/>

  </div>
  );
  }