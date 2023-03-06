import "../Styles/main.less";
import "../Styles/Dashboard/analytics.less";
import React from "react";
import icons from "../assets/assets"

export default function Analytics() {
  return (
    <div className="analytics-info">
      <div className="card">
        <div className="card-text">
          <p className="text">Today's Money</p>
          <div className="status">
            <p className="number">$53,000</p>
            <p className="percent positive">+55%</p>
          </div>
        </div>
        <div className="icon">
          <img src={icons.wallet} alt="icon" />
        </div>
      </div>
      <div className="card">
        <div className="card-text">
          <p className="text">Today's Users</p>
          <div className="status">
            <p className="number">2,300</p>
            <p className="percent positive">+5%</p>
          </div>
        </div>
        <div className="icon">
          <img src={icons.globe} alt="icon" />
        </div>
      </div>
      <div className="card">
        <div className="card-text">
          <p className="text">New Clients</p>
          <div className="status">
            <p className="number">+3,052</p>
            <p className="percent negative">-14%</p>
          </div>
        </div>
        <div className="icon">
          <img src={icons.client} alt="icon" />
        </div>
      </div>
      <div className="card">
        <div className="card-text">
          <p className="text">Total Sales</p>
          <div className="status">
            <p className="number">$173,000</p>
            <p className="percent positive">+8%</p>
          </div>
        </div>
        <div className="icon">
          <img src={icons.cart} alt="icon" />
        </div>
      </div>
    </div>
  );
}
