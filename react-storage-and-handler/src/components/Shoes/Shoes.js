import React from 'react';
import { multiply } from '../../Utilities/calculate';

const Shoes = () => {
  const first = 20;
  const second = 30;
  const result= multiply(first, second);
  return (
    <div>
      <h3>This is shoes </h3>
      <p>{result}</p>
    </div>
  );
};

export default Shoes;