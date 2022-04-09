import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import{getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  return (
    <div>

      <button onClick={()=>signInWithGoogle()}  >Google Sign In</button> <br />
       <form >
        
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="" id="" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;