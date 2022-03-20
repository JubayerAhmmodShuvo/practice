import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
  const { name, price,id } = props.cosmetic;
  const addToCart = (id) => {
    console.log('item added',id)
  }
  const addToCartWithParam=()=>addToCart(id);
  return (
    <div className='product' >
      {/* <h2>Buy This :{ props.cosmetic.name}</h2>
      <p>Only FOr:{ props.cosmetic.price} </p> */}
      <h2>Buy This :{ name}</h2>
      <p>Only For:{price} </p>
      <button onClick={addToCartWithParam} >Add TO cart</button>
      <button onClick={()=>addToCart(id)} >Add TO cart:Shortcut</button>
    </div>
    
  );
};

export default Cosmetic;