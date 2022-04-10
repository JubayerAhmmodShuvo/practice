import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = product => {
    setCart(cart.filter(item => item.id !== product.id));
  
  }
  return (
    <div className="shop-container">
      <div className="review-item-containe">
        {
          cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />)
}
      </div>
      <div className="cart-container">


        <Cart cart={cart}>

          <Link to="/shipment" >
            <button>Prceed Checkout</button>
          </Link>
        </Cart>
        
 

      </div>
  </div>
  );
};

export default Orders;