import React from "react";

const Review = ({ review }) => {
  return (
    <div className='mx-14 my-10'>
      <div class="card w-full bg-base-100  shadow-xl">
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nemo
            amet repudiandae necessitatibus officiis ad?
          </p>
          <div className="flex items-center my-6">
            <div class="avatar">
              <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6 ">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div className="">
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
