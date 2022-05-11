import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const[treatment, setTreatment] = useState(null);

  useEffect(() => { 
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
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
              setTreatment={setTreatment}
            />
            )
        }
      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment} 
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;