import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`,
    }} className="flex justify-center items-center">
      <div className="flex-1 hidded lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-xl text-primary font-bold ">Appointment</h2>
        <h3 className="3xl text-white">Make an Apointment Today</h3>
        <p className='text-justify text-white px-4' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          molestiae in et sint, dolore at dolores a hic molestias repellendus
          nam volu n
          repud
          excepturi eligendi delectus, saepe error quia ipsam harum distinctio,
          quos facere doloribus veritatis itaque fugit eveniet sit obcaecati.
          Neque aperiam, iure nemo laborum harum mollitia temporibus.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;