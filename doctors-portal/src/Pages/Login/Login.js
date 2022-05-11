import React from 'react';
import auth from '../../firebase.init';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading1, error1] =
      useSignInWithEmailAndPassword(auth);
   const {
     register,
     formState: { errors },
     handleSubmit,
   } = useForm();
  if (gUser) {
    console.log(gUser);
  }
  if ( loading || loading1) {
  return  <Loading />
    
  }
  let signInError;
  if (error || error1) { 
    signInError = <p className="text-red-500" >{ error?.message || error1?.message}</p>
  }
  const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: / [A - Za - z]{ 3} /,
                    message: "Email is not valid",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}

            <input
              value="Login"
              className="btn w-full maxx-w-xs text-white"
              type="submit"
            />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-secondary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;