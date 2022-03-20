import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

/* import { add } from '../../Utilities/calculate';
//import add from '../Utilities/calculate'; */

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]); 
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCosmetics(data));
  },[])

 /*  const first = 55;
  const second = 65;
  const result = add (first,  second);*/

 /*  const cosmetics =[
  {
    "id": "62374ea9333fa6a102c8b3d9",
    "price": 345,
    "name": "Marianne Rasmussen"
  },
  {
    "id": "62374ea9c8ff12d2a11efe9a",
    "price": 313,
    "name": "Freda Dixon"
  },
  {
    "id": "62374ea99381776122d7872b",
    "price": 527,
    "name": "Carey Jones"
  },
  {
    "id": "62374ea9663b97b257e5b4e4",
    "price": 412,
    "name": "Stark Harrell"
  },
  {
    "id": "62374ea9965b17fcb0b003cd",
    "price": 448,
    "name": "Penelope Henson"
  },
  {
    "id": "62374ea984e40f9fb8707dd3",
    "price": 69,
    "name": "Davenport Saunders"
  },
  {
    "id": "62374ea99baf66330110973b",
    "price": 247,
    "name": "Tonia Reid"
  }
] */ 
  
  
  /* [
    {id: 1, name: 'Lipstick', price: '$10'},
    {id: 2, name: 'Sipstick', price: '$160'},
    {id: 3, name: 'Tipstick', price: '$150'},
    {id: 4, name: 'Yipstick', price: '$130'},
    {id: 5, name: 'Bipstick', price: '$120'},
  ] */
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