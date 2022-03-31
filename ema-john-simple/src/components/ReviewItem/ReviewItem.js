import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
  const { product,handleRemoveProduct } = props;
  const { name,img, price, shipping, quantity } = product;
  return (
    <div className='review-item-container' >
      <div className="">
        <img src={img} alt="product" />
      </div>
     
        <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={ name}>
            {name.length > 20? name.slice(0,20)+'...':name}
          </p>
          <p>Price: <span className="orange-color">${price}</span> </p>
          <p><small>Shipping: ${shipping}</small></p> 
          <p><small>Quantity: ${ quantity}</small></p>
          </div>
        <div className="delete">
          <button onClick={ ()=>handleRemoveProduct(product)} className='dlt-btn' >
            <FontAwesomeIcon className="delete-icon" icon={ faTrashAlt} />
          </button>
          </div>
        
      </div>
    </div>
  );
};

export default ReviewItem;