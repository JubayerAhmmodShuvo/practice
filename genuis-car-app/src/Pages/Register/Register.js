import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  
  const navigateLogin = () => { 
    navigate('/login');
  }
  if (user) {
    navigate('/home');
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //const name=e.target.name.value;


    createUserWithEmailAndPassword(email, password);
  }
  return (
    <div className="register-form">
      <h2 className="text-center m-4">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />{" "}
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?
        <span
          style={{ cursor: "pointer" }}
          className="text-danger"
          onClick={navigateLogin}
        >
          Please Login
        </span>{" "}
      </p>
    </div>
  );
};

export default Register;