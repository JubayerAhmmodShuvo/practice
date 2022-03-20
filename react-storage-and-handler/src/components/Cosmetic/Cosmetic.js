import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
  const { name, price,id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  }
  const removeFromCart = id => {
removeFromDb(id);
  }
  const addToCartWithParam=()=>addToCart(id);
  return (
    <div className='product' >
      {/* <h2>Buy This :{ props.cosmetic.name}</h2>
      <p>Only FOr:{ props.cosmetic.price} </p> */}
      <h2>Buy This :{ name}</h2>
      <p>Only For:{price} </p>
      <button onClick={addToCartWithParam} >Add TO cart</button>
      <button onClick={() => addToCart(id)} >Add TO cart:Shortcut</button>
      <button onClick={()=> removeFromCart(id)} >Remove</button>
    </div>
    
  );
};

export default Cosmetic;