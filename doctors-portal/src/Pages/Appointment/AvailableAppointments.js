import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices]= useState([]);

  useEffect(() => { 
    fetch('services.json')
      .then(response => response.json())
      .then(data => setServices(data));
  },[])
  return (
    <div>
      <h4 className='text-xl text-secondary text-center' >Available Appointments on {format(date, "PP")}</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {
          services.map(service => 
            <Service
              key={service._id}
              service={service}
            />
            )
        }
      </div>
    </div>
  );
};

export default AvailableAppointments;