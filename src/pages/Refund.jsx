import React from 'react'
import TermsNCondition from '../Components/TermsNCondition/TermsNCondition'
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import RefundPolicy from '../Components/RefundPolicy/RefundPolicy';

const Refund = () => {
  return (
   
    <>
        <Navbar />
      <Hero />
      <RefundPolicy/>
      <Footer/>
    </>
  )
}

export default Refund