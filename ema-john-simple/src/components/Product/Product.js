import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
const {name, img,seller,price,ratings}=props.product;
 //const {handleClick}=props;
  
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
      <p>Price: ${price}</p>
      <p><small>Seller: {seller}</small></p>
      <p><small>Ratings: {ratings} stars</small></p>
      </div>
      
      <button onClick={()=>props.handleClick(props.product)}  className='button-cart'>
        <p className='button-text'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>

    </div>
  );
};

export default Product;