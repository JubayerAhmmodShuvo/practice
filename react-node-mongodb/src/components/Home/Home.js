import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  
  }, []);
  const handleUserDelete = id => {
    const proceed=window.confirm("Are you sure you want to delete this user?");
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",

      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const newUsers = users.filter(user => user._id !== id);
            setUser(newUsers);
          
           
         }
        });

      
    } else { 

    }
  }
  return (
    <div>
      <h1>Available Users:{users.length}</h1>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} {user.email}
            <Link to={`/update/${user._id}`} ><button>Update</button></Link>
            <button onClick={()=>handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;