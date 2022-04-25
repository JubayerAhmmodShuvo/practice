import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useServiceDetail from '../hooks/UseServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
 /*  const [user, setUser] = useState({
    name: 'as',
    email: 'abc@gmail',
    phone: '0987654321',
    address: 'kazipara,Brahmanbaria',
    
  }) */
 /*  const handleAddessChange = e => {
    const { address, ...rest } = user;
    const newAddress = e.target.value;
    const newUser = { address: newAddress, ...rest }
    setUser(newUser);
    
    
    
  } */

  const handlePlaceOrder = e => { 
    e.preventDefault();
    const order = { 
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email:user.email
    }

  }
  return (
    <div className="w-50 mx-auto">
      <h1>Please order: {service.name}</h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.dispalyName}  
          name="name"
          id=""
          placeholder="Name"
          required readonly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          id=""
          placeholder="Email"
          required disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          id=""
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
         
          name="address"
          id=""
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />

        <input className="btn btn-primary" type="submit" value="Palce Order" />
      </form>
    </div>
  );
};

export default CheckOut;