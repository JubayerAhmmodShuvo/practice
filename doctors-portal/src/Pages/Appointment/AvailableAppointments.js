import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
 import {
   useQuery

 } from "react-query";
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
  //const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {data:services, isLoading,refetch} = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
      (response) => response.json()
    )
 
  );
     if(isLoading) {
      return <Loading />;
  }
  


 /*  useEffect(() => { 
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  },[formattedDate]); */
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;