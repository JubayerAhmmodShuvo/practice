import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app);
const Requireauth = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  if (!user) { 
    return <Navigate to="/login" state={{from:location} } replace ></Navigate>
  }
  return (
    <div>
      
    </div>
  );
};

export default Requireauth;