import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

/* import { add } from '../../Utilities/calculate';
//import add from '../Utilities/calculate'; */

const Cosmetics = () => {
 /*  const first = 55;
  const second = 65;
  const result = add (first,  second);*/

  const cosmetics = [
    {id: 1, name: 'Lipstick', price: '$10'},
    {id: 2, name: 'Sipstick', price: '$160'},
    {id: 3, name: 'Tipstick', price: '$150'},
    {id: 4, name: 'Yipstick', price: '$130'},
    {id: 5, name: 'Bipstick', price: '$120'},
  ]
  return (
    <div>
      <h1>Welcome to my Cosmetics store</h1>
      {/*  <p>{result}</p> */}
      
      {
        cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
        cosmetic={cosmetic}
        />)
      }
      
    </div>
  );
};

export default Cosmetics;