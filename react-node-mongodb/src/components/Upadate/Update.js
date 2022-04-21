import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => { 
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    const url = `http://localhost:5000/user/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        alert("User Added Successfully");
      });

    e.target.reset();
  };
  
  return (
    <div>
      <h2>Updatein:{user.name}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" required name="name" placeholder="name" id="1" />
        <br />
        <input type="email" required name="email" placeholder="Email" id="2" />

        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;