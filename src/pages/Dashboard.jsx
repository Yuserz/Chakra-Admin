import DashboardLayout from "../layouts/DashboardLayout";
import "../Styles/main.less";
import Analytics from "../components/Analytics";
import BigCards from "../components/BigCards";
import React from "react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="header"></div>
      <div className="body">
        <Analytics />
        <BigCards />
        <div className="analytics-charts">
          <div className="left"></div>
          <div className="right">
            <p>Sales overview</p>
            <p>(+5) more in 2021</p>
            <div className="line-chart"></div>
          </div>
        </div>
        <div className="content-cards">
          <div className="left">Projects</div>
          <div className="right">Order overview</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
