import DashboardLayout from "../layouts/DashboardLayout";
import "../Styles/main.less";
import Analytics from "../components/Analytics";
import BigCards from "../components/BigCards";
import ProgressCard from "../components/ProgressCard";
import AnalyticsChart from "../components/AnalyticsChart";
import React from "react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="header"></div>
      <div className="body">
        <Analytics />
        <BigCards />
        <AnalyticsChart />
        <ProgressCard />
      </div>
    </DashboardLayout>
  );
}
