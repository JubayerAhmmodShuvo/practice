
import './App.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';


const auth= getAuth(app);
function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  }
  const handleFormSubmit = (e) => {
      e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
    
      e.stopPropagation();
      return;
    }
    if (!/(?=. *?[#?!@$%^&* -])/.test(password)) { 
      setError('Password must contain at least one special character');
      return;
    }

    setError('');
    setValidated(true);
  


    createUserWithEmailAndPassword(auth, email, password)
      .then(result => { 
        const user = result.user;
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      
    })

    e.preventDefault();
  }
  const handleRegister = (e) => { 
    setRegistered(e.target.checked);
  }
  



  return (



    <div className="">

      <div className="registration w-50 mx-auto">
        <h2 className="m-4 text-primary">{ registered ?'Login': 'Register' }</h2>
        <Form noValidate validated={validated} onSubmit={ handleFormSubmit} >
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={ handleEmailBlur} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
            </Form.Text>
             <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Check onChange={handleRegister} type="checkbox" label="I agree to the terms and conditions" required />
          </Form.Group>
          
          <p className="text-danger">{ error}</p>

  <Button variant="primary" type="submit">
            { registered ? 'Login': 'Register' }
  </Button>
</Form>
  </div>

      
    </div>
  );
}

export default App;
