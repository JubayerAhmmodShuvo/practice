import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="review-item-containe">
        {
          cart.map(product => <ReviewItem
            key={product.id}
            product={product}
          />)
}
      </div>
      <div className="cart-container">


<Cart cart={cart} />














      </div>
  </div>
  );
};

export default Orders;