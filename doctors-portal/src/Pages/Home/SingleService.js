import React from 'react';

const SingleService = ({ service }) => {
  const { name, img} = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={ img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{ name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;