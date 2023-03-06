import React from "react";
import LoginLayout from "../layouts/LoginLayout";
import LoginForm from "../components/LoginForm.jsx";
import loginBg from "../assets/images/loginBg.png"

export default function Login() {
  return (
    <LoginLayout>
      <div className="left-login"><LoginForm /></div>
      <div className="bg-wrapper">
        <div className="bg"><img src={loginBg} alt="" /></div>
      </div>
    </LoginLayout>
  );
}
