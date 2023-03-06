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
      <Analytics />
      <BigCards />
      <AnalyticsChart />
      <ProgressCard />
    </DashboardLayout>
  );
}
