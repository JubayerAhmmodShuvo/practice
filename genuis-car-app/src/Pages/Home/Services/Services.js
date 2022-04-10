import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
  const[services, setServices]=useState([]);

  useEffect(() => { 
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  },[])

  return (
    <div>
      <h2 className="service-title" >Servie: {services.length}</h2>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;