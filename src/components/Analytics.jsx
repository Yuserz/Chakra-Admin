import "../Styles/main.less";
import "../Styles/Dashboard/analytics.less";
import React from "react";
import icons from "../assets/assets";

const cardData = [
  {
    text: "Today's Money",
    number: "$53,000",
    percent: "+55%",
    icon: icons.wallet,
  },
  {
    text: "Today's Users",
    number: "2,300",
    percent: "+5%",
    icon: icons.globe,
  },
  {
    text: "New Clients",
    number: "+3,052",
    percent: "-14%",
    icon: icons.client,
  },
  {
    text: "Total Sales",
    number: "$173,000",
    percent: "+8%",
    icon: icons.cart,
  },
];

export default function Analytics() {
  return (
    <div className="analytics-info">
      {cardData.map((data, index) => (
        <div className="card" key={index}>
          <div className="card-text">
            <p className="text">{data.text}</p>
            <div className="status">
              <p className="number">{data.number}</p>
              <p
                className={`percent ${
                  data.percent.startsWith("+") ? "positive" : "negative"
                }`}
              >
                {data.percent}
              </p>
            </div>
          </div>
          <div className="icon">
            <img src={data.icon} alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
}
