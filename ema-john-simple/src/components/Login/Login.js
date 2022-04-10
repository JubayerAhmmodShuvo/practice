import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate, useLocation } from "react-router";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" "); 
  
 const [signInWithEmailAndPassword, user, loading, error] =
   useSignInWithEmailAndPassword(auth);  
  const navigate = useNavigate();
  const location = useLocation();

  
  const from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, { replace: true });
  }


  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleUserLogin = event => {
    event.preventDefault();
    
    signInWithEmailAndPassword(email, password);

  }
  return (
    <div className="form-container">
      <div className="">
        <h3 className="form-title">Login</h3>
        <form onSubmit={handleUserLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          <p style={{ color: 'red' }} >{error?.message}</p>
          {
            loading && <p>Loading...</p>
          }
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New To Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create One
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
