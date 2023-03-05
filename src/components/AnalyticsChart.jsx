import React from "react";
import "../Styles/Dashboard/analyticsChart.less";
import icons from "../assets/assets";

export default function AnalyticsChart() {
  return (
    <div className="analytics-charts">
      <div className="left">
        <div className=" top chart"></div>
        <div className="box">
          <p className="header"> Active user</p>
          <p className="text">
            <span>( +23 )</span> than last week
          </p>
        </div>
        <div className="bottom cards">
          <div className="card">
            <div className="top">
              <div className="icon">
                <img src={icons.home} alt="icon" />
              </div>
              <div className="label">Users</div>
            </div>
            <div className="middle number">1,000</div>
            <div className="bottom bar"></div>
          </div>
          <div className="card">
            <div className="top">
              <div className="icon">
                <img src={icons.wallet} alt="icon" />
              </div>
              <div className="label">Clicks</div>
            </div>
            <div className="middle number">1,000</div>
            <div className="bottom bar"></div>
          </div>
          <div className="card">
            <div className="top">
              <div className="icon">
                <img src={icons.cart} alt="icon" />
              </div>
              <div className="label">Sales</div>
            </div>
            <div className="middle number">1,000</div>
            <div className="bottom bar"></div>
          </div>
          <div className="card">
            <div className="top">
              <div className="icon">
                <img src={icons.items} alt="icon" />
              </div>
              <div className="label">Items</div>
            </div>
            <div className="middle number">1,000</div>
            <div className="bottom bar"></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box">
          <p className="header">Sales overview</p>
          <p className="text">
            <span> ( +5 )</span> more in 2021
          </p>
        </div>
        <div className="line-chart"></div>
      </div>
    </div>
  );
}
