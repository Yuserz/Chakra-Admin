import React from "react";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import "../Styles/main.less";

export default function DashboardLayout({ children }) {
  return (
    <div className="container">
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="main">
        {children}
        <Footer />
      </div>
    </div>
  );
}
