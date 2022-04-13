
import React, { useRef } from 'react';
import {Form,Button } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state ? location.state.from : { pathname: "/" };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    signInWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate(from , {replace: true});
  }
  const navigateRegister = (e) => {
    navigate('/register');
  }
  
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center text-primary"> Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New To Genius Car <span style={{cursor:'pointer'}} className="text-danger" onClick={navigateRegister}>Please Register</span> </p>
    </div>
  );
};

export default Login;