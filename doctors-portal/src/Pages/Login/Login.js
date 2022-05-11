import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth'

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form></form>
          <div className="divider">OR</div>
          <button onClick={() =>signInWithGoogle()} class="btn btn-outline btn-secondary">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;