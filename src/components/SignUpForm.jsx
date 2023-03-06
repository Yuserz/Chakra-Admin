import "../Styles/loginSignUp.less";
import TextBox from "./TextBox.jsx";
import icons from "../assets/assets";
import React from "react";


export default function SignUpForm() {
  return (
    <div className="sign-up-form-container">
      <div className="box sign-up">
        <div className="social-account">
          <p className="register-text">Register with</p>
          <div className="social-account-option">
            <div className="social-link">
              <img src={icons.facebook} alt="fb" />{" "}
            </div>
            <div className="social-link">
              <img src={icons.apple} alt="apple" />{" "}
            </div>
            <div className="social-link">
              <img src={icons.google} alt="google" />{" "}
            </div>
          </div>
          <p className="or-text">or</p>
        </div>
        <div className="input-box">
          <div className="input-field">
            <label htmlFor="Password">Name</label>
            <TextBox
              type="text"
              name="name"
              id="exampleFormControlInput2"
              placeholder="You full name"
              required
            />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label htmlFor="Password">Password</label>
            <TextBox
              type="text"
              name="email"
              id="exampleFormControlInput2"
              placeholder="Your email address"
              required
            />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <label htmlFor="Email">Email</label>
            <TextBox
              type="password"
              name="password"
              id="exampleFormControlInput2"
              placeholder="Your password"
              required
            />
          </div>
        </div>

        <div className="remember-me">
          <label className="remember-me__switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Remember me</p>
        </div>

        <div>
          <button className="confirm-btn">SIGN IN</button>
        </div>

        <div className="account">
          Already have an account?{" "}
          <a href="" className="sign-in-up">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
