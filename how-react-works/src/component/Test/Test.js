import React from 'react';

const Test = (props) => {

  const name = 'Jubayer Ahmmod';
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Price: {props.price}</h2>
    </div>
  );
};

export default Test;