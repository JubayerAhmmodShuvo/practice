import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then(response => response.json())
      .then(data => setFriend(data));
  
   }, [friendId]);


  return (
    <div>
      <h2>This is Detail of a Bondhu:{ friendId}</h2>
      <h3>Name:{ friend.name}</h3>
      <h4>Email:{friend.email}</h4>
      <h6>Website:{friend.website}</h6>
      <p> <small>City:{friend.address?.city}</small> </p>
      <p>Lat:{ friend.address?.geo?.lat}</p>
    </div>
  );
};

export default FriendDetails;