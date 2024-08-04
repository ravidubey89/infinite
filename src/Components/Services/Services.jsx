import React from "react";
import ServiceData from "./Data";
import "./Services.css";

const Services = () => {
  const data = ServiceData;
  return (
    <div className="services-row">
      <div className="container">
      <h2>Our Services at Infinite Epicenter</h2>
      <p>At Infinite Epicenter, we pride ourselves on offering a comprehensive range of truck freight and logistics services tailored to meet the unique needs of our clients. Whether you need to transport a single pallet or a full truckload, our team of experienced professionals and extensive fleet ensure that your goods are delivered safely, efficiently, and on time. Explore the diverse services we provide:</p>
      
      <div className="service-flex">
        {data.service.map((item) => {
          return (
            <div className="services">
              <img src={item.icon} />
              <strong>{item.heading}</strong>
              <p>{item.description}</p>
            </div>
          );
        })}

        <h3>Specialized Freight Services</h3>
        <p>Infinite Epicenter is equipped to handle specialized freight that requires unique care and handling. Our Specialized Freight services include:</p>
      <ul>
        <li><strong>Hazardous Materials: </strong> We are experienced in transporting hazardous materials, adhering to all regulatory requirements and safety protocols to ensure the secure delivery of your cargo.</li>
        <li><strong>Temperature-Controlled Freight: </strong> For perishable goods and items that require specific temperature conditions, we offer refrigerated and climate-controlled transportation solutions.</li>
        <li><strong>Oversized and Overweight Freight: </strong> We have the capability to transport oversized and overweight loads, including heavy machinery, construction equipment, and large industrial components.</li>
      </ul>

      <div className="techno-row">
        <h3>Technology-Driven Solutions</h3>
          <p>We utilize the latest technology to enhance our services and provide real-time visibility into your shipments. Our technology-driven solutions include:</p>
        <ul>
          <li><strong>Real-Time Tracking: </strong> Monitor the status and location of your shipments with our real-time tracking system, providing you with up-to-date information and peace of mind.</li>
          <li><strong>Route Optimization: </strong> Our advanced route optimization software helps minimize transit times and reduce transportation costs, ensuring efficient delivery.</li>
          <li><strong>Automated Alerts and Notifications: </strong> Stay informed with automated alerts and notifications, keeping you updated on shipment status, delivery times, and any potential delays.</li>
        </ul>
        <span>
        <strong>Infinite Epicenter</strong> is committed to providing exceptional service and innovative solutions to meet all your truck freight and logistics needs. Whether you require standard transportation or specialized logistics services, our team is here to deliver reliable, efficient, and cost-effective solutions that drive your business forward. Contact us today to learn more about how we can support your logistics requirements and help you achieve your goals.
        </span>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
