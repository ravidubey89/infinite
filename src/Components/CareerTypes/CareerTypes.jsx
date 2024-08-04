import React from "react";
import CareerTypesData from "./Data";
import "./CareerTypes.css";

const CareerTypes = () => {
  const data = CareerTypesData;
  return (
    <div className="services-row">
      <div className="container">
      <h2>Types of Carriers We Work With</h2>
      
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

export default CareerTypes;
