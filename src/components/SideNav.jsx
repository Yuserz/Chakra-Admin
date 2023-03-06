import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Dashboard/sideNav.less";
import icons from "../assets/assets";

const navItems = [
  {
    icon: icons.homeGreen,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: icons.table,
    label: "Table",
    path: "/Table",
  },
  {
    icon: icons.card,
    label: "Billing",
    path: "/billing",
  },
  {
    icon: icons.build,
    label: "Items",
    path: "/items",
  },
  {
    header: true,
    label: "Account Page",
  },
  {
    icon: icons.profile2,
    label: "Profile",
    path: "/profile",
  },
  {
    icon: icons.signIn2,
    label: "Sign in",
    path: "/",
  },
  {
    icon: icons.signUp2,
    label: "Sign up",
    path: "/signUp",
  },
];

export default function SideNav() {
  const location = useLocation();

  return (
    <div className="side">
      <div className="site-brand">
        <img src={icons.brandLogo} alt="" /> VANDELAY INDUSTRIES
      </div>
      <div className="line"></div>
      <div className="nav-help-container">
        <div className="nav">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="nav-link">
              <div
                className={`nav-btn ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.icon && (
                  <div className="icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                )}
                <div className={`label ${item.header ? "account-page" : ""}`}>
                  {item.label}
                </div>
              </div>
            </Link>
          ))}
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
