import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate=useNavigate();
  const handlenavigateToServiceDetail = id => { 
    navigate(`/service/${id}`);
  }
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h6>{price}</h6>
      <p>{description}</p>
      <button onClick={()=>handlenavigateToServiceDetail(_id)}>Book: {name}</button>
    </div>
  );
};

export default Service;