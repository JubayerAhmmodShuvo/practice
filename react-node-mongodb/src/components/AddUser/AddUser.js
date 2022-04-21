import React from 'react';

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    
    fetch("http://localhost:5000/user", {
      method: "POST",
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
    

    
  }

  return (
    <div>
      <h1>Add a New User</h1>

      <form onSubmit={handleAddUser} >
        <input type="text" required name="name" placeholder="name" id="1" />
        <br />
        <input type="email" required name="email" placeholder="Email" id="2" />

        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;