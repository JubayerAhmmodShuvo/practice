import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {

  const { signInWithGoogle} = useFirebase();
  return (
    <div>

      <button onClick={signInWithGoogle}  >Google Sign In</button> <br />
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