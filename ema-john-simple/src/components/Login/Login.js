import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <div className="">
        <h3 className="form-title">Login</h3>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
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
