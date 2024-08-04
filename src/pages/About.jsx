import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import AboutUs from '../Components/AboutUs/AboutUs';


const About = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About