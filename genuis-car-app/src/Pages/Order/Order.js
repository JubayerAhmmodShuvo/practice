import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Order = () => {
  const [user]= useAuthState(auth);
  const [order, setOrder] = useState([]);
  useEffect(() => {

    const getOrder = async() => {
      const url = `http://localhost:5000/order?email=${user.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        });
        setOrder(data);
     }
     catch (error) {
       console.log(error.message);
       
     }
      
    }
   getOrder();
    
   },[user])
  return (
    <div>
      <h1>Order:{order.length}</h1>
    </div>
  );
};

export default Order;