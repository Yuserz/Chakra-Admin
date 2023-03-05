import React from "react";
import "../Styles/Dashboard/sideNav.less";
import icons from "../assets/assets";
import bgImage from "../assets/images/needHelpBg.png";

export default function SideNav() {
  return (
    <div className="side">
      <div className="site-brand">
        <img src={icons.brandLogo} alt="" /> VANDELAY INDUSTRIES
      </div>
      <div className="line"></div>
      <div className="nav-help-container">
        <div className="nav">
          <div className="nav-btn active">
            <div className="icon">
              <img src={icons.homeGreen} alt="icon" />
            </div>
            <div className="label">Dashboard</div>
          </div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.table} alt="icon" />
            </div>
            <div className="label">Table</div>
          </div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.card} alt="icon" />
            </div>
            <div className="label">Billing</div>
          </div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.build} alt="icon" />
            </div>
            <div className="label">Items</div>
          </div>
          <div className="header">Account Page</div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.profile2} alt="icon" />
            </div>
            <div className="label">Profile</div>
          </div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.signIn2} alt="icon" />
            </div>
            <div className="label">Sign in</div>
          </div>
          <div className="nav-btn">
            <div className="icon">
              <img src={icons.signUp2} alt="icon" />
            </div>
            <div className="label">Sign up</div>
          </div>
        </div>
        <div className="help-box">
          <div className="box">
            <div className="icon">
              <img src={icons.help} alt="icon" />
            </div>
            <div className="middle">
              <p className="question">Need Help?</p>
              <p className="text">Please check our docs</p>
            </div>
            <div className="btn">DOCUMENTATION</div>
          </div>
        </div>
      </div>
    </div>
  );
}
