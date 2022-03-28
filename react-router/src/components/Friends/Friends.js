import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setFriends(data));
    
  },[])
  return (
    <div>
      <h3>Hello Friends How are Your Mashoka</h3>
      <p>Parle kisu taka dhar dis...{friends.length}</p>
      {
        friends.map(friend => <Friend 
          friend={friend}
          key={friend.id}
        />)
      }
    </div>
  );
};

export default Friends;