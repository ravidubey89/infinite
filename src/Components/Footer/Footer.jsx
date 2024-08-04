
import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    
        <div className='footer'>
            <div className='container'>
                <div className='links'>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/refund_policy">Refund Policy</Link>
                </div>
                <p>Copyright © 2024 INFINITE EPICENTER - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer