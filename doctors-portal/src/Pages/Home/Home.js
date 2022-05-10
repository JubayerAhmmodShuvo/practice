import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;