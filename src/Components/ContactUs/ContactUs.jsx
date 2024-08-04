import React from 'react'
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <div className='contact-row'>
      <div className='contactHero'>
      <h1>CONNECT TO THE FUTURE OF COMMUNICATION</h1>
      </div>
      <div className='container'>
      <h2>CONTACT US</h2>
        <div className='contact-flex'>
          <div className='contact-details'>
            <img src='/location-icon.png'/>
              <strong>Address</strong>
              <p>
              534 Mono St Manteca CA 95337
              </p>
          </div>
          <div className='contact-details'>
            <img src='/mail-icon.png'/>
              <strong>Email</strong>
             <a href='mailto:inof@spectinternet.com'>inof@spectinternet.com</a>
          </div>
          <div className='contact-details'>
            <img src='/phone-icon.png'/>
              <strong>Contact Number</strong>
              <p>
              2092887861 
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs