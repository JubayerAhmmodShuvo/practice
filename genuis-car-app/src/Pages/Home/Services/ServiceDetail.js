import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/UseServiceDetail';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetail(serviceId);
 

  return (
    <div>
      <h2> You are about to book: {service.name}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <button className="text-center btn btn-primary">
          Proceed CheckOut
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetail;