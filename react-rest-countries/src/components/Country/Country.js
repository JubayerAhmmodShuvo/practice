import React from 'react';

import './Country.css'

const Country = (props) => {
  return (
    <div className='country'>
      <h2>Country Name :{props.name} </h2>
      <h5>Population : {props.population}</h5>
      <p> <small>Area : {props.country.area}</small> 
      </p>
      <h4> <small>Region : {props.country.region}</small></h4>
    </div>
  );
};

export default Country;