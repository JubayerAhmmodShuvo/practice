import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth=getAuth(app);
const Requireauth = ({ children }) => {
  const [user] = useAuthState(auth);
  if(!user)
  return (
    <div>
      
    </div>
  );
};

export default Requireauth;