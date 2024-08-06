
import React from 'react'
import "./AboutUs.css"
import aboutData from "./Data";

const AboutUs = () => {
  const aboutPara = aboutData
  return (
    <div className='about-row'>
        <div className='container'>
            <h2>About Us: Infinite Epicenter</h2>
            <h4 className='text-center'>Your Trusted Partner in Truck Freight and Logistics Solutions</h4>
            <p className='text-center'>Infinite Epicenter is a premier provider of truck freight and logistics services, committed to delivering excellence in every aspect of our operations. With a strong focus on customer satisfaction, innovation, and reliability, we have established ourselves as a trusted partner for businesses across various industries. Our comprehensive range of services, state-of-the-art technology, and dedicated team make us a leader in the transportation and logistics sector.</p>
        
            <div className="about-text-image-container">
              <div className='abt-left'>
              
                {aboutPara.data.map((items)=>{
                  return(<>
                  <div className='repeat-about-div'>
                  <h3>{items.heading}</h3>
                  <p>{items.paragraph}</p>
                  </div>
                  </>
                  )
                })
                }
               
                <ul className='listData'>
                <strong>Our Values</strong>
                {
                  aboutPara.listData.map((items)=>{
                    return(<>
                      <li><span>{items.boldText}</span>{items.list}</li>
                    </>)
                    
                  })
                }
                </ul>
               
              </div>
              {/* <div className='abt-right'>
                <img src='/slide-image-free-img.png' />
                <a href='tel:2092173571' className='btn'>Contact us</a>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutUs