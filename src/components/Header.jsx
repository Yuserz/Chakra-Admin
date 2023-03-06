import React from "react";
import "../Styles/header.less";
import icons from "../assets/assets";

export default function Header() {
  const currentPath = window.location.pathname;

  return (
    <header className="header-container">
      <div className="header-box">
        <div className="site-brand"><img src={currentPath !== "/signup" ? icons.brandLogo : icons.brandLogoWhite} alt="" /> VANDELAY INDUSTRIES</div>
        <div className="header-nav">
          <div className="nav-btn">
            <img src={currentPath !== "/signup" ? icons.dashboard : icons.dashboardWhite} alt="" />
            <a href="/Dashboard">Dashboard</a>
          </div>
          <div className="nav-btn">
            <img src={currentPath !== "/signup" ? icons.profile : icons.profileWhite} alt="" />
            <a href="/Profile">Profile</a>{" "}
          </div>
          <div className="nav-btn">
            <img src={currentPath !== "/signup" ? icons.signUp : icons.signUnWhite} alt="" />
            <a href="/SignUp">sign up</a>{" "}
          </div>
          <div className="nav-btn">
            <img src={currentPath !== "/signup" ? icons.signIn : icons.signInWhite} alt="" />
            <a href="/SignIn">Sign in</a>{" "}
          </div>
        </div>
        <button className="download-btn">Free Download</button>
      </div>
    </header>
  );
}
