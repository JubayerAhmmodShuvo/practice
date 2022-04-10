import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = event => { 
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  }
  const handeCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else { 

    }
  }
  return (
    <div className="form-container">
      <div className="">
        <h3 className="form-title">SignUp</h3>
        <form onSubmit={handleCreateUder} >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm password" id="" required />
          </div>
          <p style={{color:"red"}} >{ error}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          Already Have an Account?{" "}
          <Link className="form-link" to="/login">
            Create One
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
