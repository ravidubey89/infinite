import React from "react";
import ServicesHomeData from "./Data";
import "./ServicesHome.css";

const ServicesHome = () => {
  const data = ServicesHomeData;
  return (
    <div className="services-row">
      <div className="container">
       
      <h2>Comprehensive Truck Freight Services</h2>
      
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
      </div>
    </div>
    </div>
  );
};

export default ServicesHome;
