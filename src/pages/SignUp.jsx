import SignUpForm from "../components/SingUpForm.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import backgroundImage from "../assets/images/Image.png";
import React from "react";

export default function SignUp() {
  return (
    <div className="container-sign-up">
      <div className="bg-image">
        <img src={backgroundImage} alt="" />
      </div>
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}
