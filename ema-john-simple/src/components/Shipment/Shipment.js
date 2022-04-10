import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';



const Shipment = () => {
  const [user]= useAuthState(auth);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleNameBlur = event => {
    setName(event.target.value);
  }

 

  
   const handlePhoneBlur = (event) => {
   
   };
   const handleAddressBlur = (event) => {
    
   };
  
   const handleCreateUser = (event) => {
     event.preventDefault();
    
    

     setEmail("");
     
    
   };
  return (
    <div className="form-container">
      <div className="">
        <h3 className="form-title">Shipping Information</h3>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="Name">Name</label>
            <input
            
              type="name"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
        <p>
          Already Have an Account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Shipment;