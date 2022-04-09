import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import{getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location?.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => { 
    signInWithGoogle()
      .then(() => {
        


      navigate(from, { replace: true });
    })
  }

    
  return (
    <div>

      <button onClick={handleGoogleSignIn}  >Google Sign In</button> <br />
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