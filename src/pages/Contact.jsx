import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import AboutUs from '../Components/AboutUs/AboutUs';
import ContactUs from '../Components/ContactUs/ContactUs';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contact