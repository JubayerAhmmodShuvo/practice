import React from 'react';

const Cosmetic = (props) => {
  const { name,price} = props.cosmetic;
  return (
    <div>
      {/* <h2>Buy This :{ props.cosmetic.name}</h2>
      <p>Only FOr:{ props.cosmetic.price} </p> */}
      <h2>Buy This :{ name}</h2>
      <p>Only For:{ price} </p>
    </div>
  );
};

export default Cosmetic;