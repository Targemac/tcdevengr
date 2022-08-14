import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Login.Modules.css";

const Login = () => {
  console.log("Login page");
  return (
    <div>
      <div className="loginBox">
        <div className="row login-head ">Login</div>
        <div className="row info-box ">info box</div>
        <div className="row">
          <form>
            <div className="input-row">
              <label>email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>&nbsp;</div>
            <div className="input-row">
              <label>password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="input-row">
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="row extra-info-box">
          <p>
            i dont have an account?{" "}
            <Link to="/signup" className="signup-link">
              create an account 🙂 for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
