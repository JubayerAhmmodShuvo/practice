import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner';
import Info from './Info';
import Services from './Services';


const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
    </>
  );
};

export default Home;