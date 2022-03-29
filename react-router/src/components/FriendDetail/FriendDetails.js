import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
  const{friendId}= useParams();
  return (
    <div>
      <h2>This is Detail of a Bondhu:{ friendId}</h2>

    </div>
  );
};

export default FriendDetails;