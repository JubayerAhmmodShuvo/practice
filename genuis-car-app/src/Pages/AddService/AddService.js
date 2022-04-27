import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://mighty-refuge-60882.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),

    })
      .then((res) => res.json())
      .then((result) => console.log(data));
    
    
  };
  return (
    <div className="w-50 mx-auto" >
      <h1>This is service</h1>
      <form className='d-flex flex-column gy-2' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-3' palceholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        <input className='mb-3' palceholder='Description' {...register("description")} />
        <input className='mb-3' palceholder='price' type="number" {...register("price")} />
        <input className='mb-3' palceholder='PhotoURL' type="text" {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;