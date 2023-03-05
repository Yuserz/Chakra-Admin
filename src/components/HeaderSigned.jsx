import React from "react";
import "../Styles/headerSigned.less";
import icons from "../assets/assets";

export default function HeaderSigned() {
  return (
    <header className="header-container">
      <div className="header-box">
        <div className="box">
          <div className="left">
            <div className="navigate">
              <p>
                <span className="page">Pages</span> <span>/</span> 
                <span className="page-name">Dashboard</span>
              </p>
            </div>
          </div>
          <div className="right">
            <div className="search-bar">
              <img src={icons.search} alt="icon" />
              <input type="text" placeholder="Type here..." name="" id="" />
            </div>
            <div className="btn">
              <img src={icons.profile3} alt="" />
              <p>Sign In</p>
            </div>
            <div className="btn">
              <img src={icons.setting} alt="" />
            </div>
            <div className="btn">
              <img src={icons.bellDark} alt="" />
            </div>
          </div>
        </div>
        <p className="current-page">Dashboard</p>
      </div>
    </header>
  );
}
