import React from 'react';

import './Country.css'

const Country = (props) => {
  return (
    <div className='country'>
      <img src={ props.country.flags.png} alt="" />
      <h2>Name :{props.name} </h2>
      <h4>Population : {props.population}</h4>
      <h5> <small>Area : {props.country.area}</small> 
      </h5>
      <h4> <small>Region : {props.country.region}</small></h4>

    </div>
  );
};

export default Country;