import React from "react";
import icons from "../assets/assets";

const orders = [
    {
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
      image: icons.bell
    },
    {
      title: "New order #4219423",
      date: "21 DEC 11:21 PM",
      image: icons.newOrder
    },
    {
      title: "Server Payments for April",
      date: "21 DEC 9:a PM",
      image: icons.blueCart
    },
    {
        title: "New card added for order #3210145",
        date: "20 DEC 3:52 PM",
        image: icons.walletOrange
      },
      {
        title: "Unlock packages for Development",
        date: "19 DEC 11:35 PM",
        image: icons.box
      },
      {
        title: "New order #9851258",
        date: "18 DEC 4:41 PM",
        image: icons.xd
      },
  ];

export default function OrderOverview() {
  return (
    <div className="card">
      <div className="box">
        <p className="header">Order Overview</p>
        <p className="text">
          <span>+30%</span> this month
        </p>
      </div>
      <div className="order-progress">
        {orders.map((order, index) => (
          <div className="row" key={index}>
            <div className="left">
              <img src={order.image} alt="icon" />
              <div className="line-container">
                <div className="line"></div>
              </div>
            </div>
            <div className="right">
              <p className="title">{order.title}</p>
              <p className="date">{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
