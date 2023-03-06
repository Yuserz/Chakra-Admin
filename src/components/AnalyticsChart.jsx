import React from "react";
import "../Styles/Dashboard/analyticsChart.less";
import icons from "../assets/assets";
import LineGraph from "../components/Graph/BarGraph";

const data = [
  {
    title: "User",
    number: "32,984",
    image: icons.home,
  },
  {
    title: "Clicks",
    number: "2,42m",
    image: icons.rocket,
  },

  {
    title: "Sales",
    number: "2,400$",
    image: icons.cart,
  },

  {
    title: "Items",
    number: 320,
    image: icons.items,
  },
];

export default function AnalyticsChart() {
  return (
    <div className="analytics-charts">
      <div className="left">
        <div className=" top chart">
        <LineGraph />
        </div>
        <div className="box">
          <p className="header"> Active user</p>
          <p className="text">
            <span>( +23 )</span> than last week
          </p>
        </div>
        <div className="bottom cards">
          {data.map((data, index) => (
            <div className="row" key={index}>
              <div className="card">
                <div className="top">
                  <div className="icon">
                    <img src={data.image} alt="icon" />
                  </div>
                  <div className="label">{data.title}</div>
                </div>
                <div className="middle number">{data.number}</div>
                <div className="bottom bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="box">
          <p className="header">Sales overview</p>
          <p className="text">
            <span> ( +5 )</span> more in 2021
          </p>
        </div>
        <div className="line-chart">
          
        </div>
      </div>
    </div>
  );
}
