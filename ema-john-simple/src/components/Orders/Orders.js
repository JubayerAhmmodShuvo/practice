import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
  const [products,setProducts]=useProducts();
  return (
    <div>
      <h3>This is Orders:{products.length}</h3>
    </div>
  );
};

export default Orders;