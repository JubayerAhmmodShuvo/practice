import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const{serviceId}=useParams();
  return (
    <div>
      <h2> Service Detail: {serviceId}</h2>
      <Link to="/checkout">
        <button className="text-center btn btn-primary">Proceed CheckOut</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;