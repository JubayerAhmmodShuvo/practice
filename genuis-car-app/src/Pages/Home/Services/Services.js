import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
  const[services, setServices]=useState([]);

  useEffect(() => { 
    fetch("https://mighty-refuge-60882.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])

  return (
    <div>
      <h2 id="services" className="service-title" >Service: {services.length}</h2>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;