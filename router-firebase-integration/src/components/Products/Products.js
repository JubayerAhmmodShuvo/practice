import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth= getAuth(app);
const Products = () => {
  const [user]=useAuthState(auth);
  return (
    <div>
      <h2>Knok Knok who is there</h2>
      <h5>{ user? user.displayName : 'Nobody'}</h5>
    </div>
  );
};

export default Products;