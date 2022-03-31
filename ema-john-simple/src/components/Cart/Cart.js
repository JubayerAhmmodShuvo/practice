import React from 'react';
import './Cart.css';

const Cart = (props) => {
 const { cart }= props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity =quantity+ product.quantity;
    total = total + product.price* product.quantity;
    shipping = shipping + product.shipping  ;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div className='cart'>
      <h4>Order Summary </h4>
      <p>Selected Items:{quantity}</p>
      <p>Total Price:${total} </p>
      <p>Total Shipping:${shipping} </p>
      <p>Tax:${tax} </p>
      <h5>Grand Total:${grandTotal} </h5>
      { props.children }
    </div>
  );
};

export default Cart;