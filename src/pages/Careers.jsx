import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Careers from '../Components/Careers/Careers';
import WhyPartner from '../Components/WhyPartner/WhyPartner';
import CareerTypes from '../Components/CareerTypes/CareerTypes';
import OurCommitment from '../Components/OurCommitment/OurCommitment';


const Product = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Careers/>
      <WhyPartner/>
      <CareerTypes/>
      <OurCommitment/>
      <Footer/>
      
    </div>
  )
}

export default Product