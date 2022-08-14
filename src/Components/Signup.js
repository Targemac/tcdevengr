import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Signup.Modules.css";

const Signup = () => {
  console.log("Signup page");
  return (
    <div>
      <div className="signupBox">
        <div className="row signup-head ">create account</div>
        <div className="row info-box ">info box</div>
        <div className="row">
          <form>
            <div className="input-row-parent">
              <div className="input-row-child">
                <label>First name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-row-child">
                <label>Last name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div>&nbsp;</div>
            <div className="input-row-parent">
              <div className="input-row-child">
                <label>gender</label>
                <label>
                  <input type="radio" name="gender" value="male" />
                  male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  female
                </label>
              </div>
              <div className="input-row-child">
                <label>date of birth</label>
                <input type="date" placeholder="Date of Birth" />
              </div>
            </div>
            &nbsp;
            <div className="input-row-parent">
              <div className="input-row-child">
                <label>email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-row-child">
                <label>phone</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            &nbsp;
            <div className="input-row">
              <label>address</label>
              <textarea cols="30" rows="2" placeholder="Address"></textarea>
            </div>
            <div>&nbsp;</div>
            <div className="input-row">
              <label>password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div>&nbsp;</div>
            <div className="input-row">
              <label>confirm password</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div>&nbsp;</div>
            <div className="input-row">
              <label>
                <input type="checkbox" required title="Terms and Conditions" />i
                agree to the terms and conditions
              </label>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="input-row">
              <input type="submit" value="Create Account" />
            </div>
          </form>
        </div>
        <div className="row extra-info-box">
          <p>
            already have an account?{" "}
            <Link to="/login" className="signup-link">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
