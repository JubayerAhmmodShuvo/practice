import React from 'react';


const InfoCard = ({ img,cardTitle,bgClass}) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl py-5 ${bgClass} `}>
      <figure className="pl-5 pt-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white text-center  ">
        <h2 class="card-title  my-2 mx-auto ">{cardTitle}</h2>
        <h3 className="mx-auto">Click the button to listen on Spotiwhy app.</h3>
      </div>
    </div>
  );
};

export default InfoCard;