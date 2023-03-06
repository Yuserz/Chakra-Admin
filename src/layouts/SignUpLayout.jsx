import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/loginSignUp.less";
import React from "react";
export default function SignUpLayout({ children }) {
  return (
    <div className="sign-up__wrapper">
      <div className="sign-up-main">{children}</div>
      <Footer />
    </div>
  );
}
