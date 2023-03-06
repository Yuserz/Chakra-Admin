import SignUpForm from "../components/SignUpForm.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import backgroundImage from "../assets/images/signUpBg.png";
import React from "react";
import SignUpLayout from "../layouts/SignUpLayout";

export default function SignUp() {
  return (
    <SignUpLayout>
      <div className="bg-image">
        <Header />
        <div className="text">
          <p className="top">Welcome</p>
          <p className="bottom">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
      </div>
      <SignUpForm />
    </SignUpLayout>
  );
}
