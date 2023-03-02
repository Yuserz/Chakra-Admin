import React from "react";
import "../Styles/header.less";
import icons from "../assets/assets";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-box">
        <div className="site-brand"><img src={icons.brandLogo} alt="" /> VANDELAY INDUSTRIES</div>
        <div className="header-nav">
          <div className="nav-btn">
            <img src={icons.dashboard} alt="" />
            <a href="">Dashboard</a>
          </div>
          <div className="nav-btn">
            <img src={icons.profile} alt="" />
            <a href="">Profile</a>{" "}
          </div>
          <div className="nav-btn">
            <img src={icons.signUp} alt="" />
            <a href="">sign up</a>{" "}
          </div>
          <div className="nav-btn">
            <img src={icons.signIn} alt="" />
            <a href="">Sign in</a>{" "}
          </div>
        </div>
        <button className="download-btn">Free Download</button>
      </div>
    </header>
  );
}
