import DashboardLayout from "../layouts/DashboardLayout";
import "../Styles/main.less";
import "../Styles/Dashboard/Table.less";
import React from "react";
import ProjectTable from "../components/ProjectTable";

export default function Table() {
  return (
    <DashboardLayout>
      <div className="table-card">
        <ProjectTable />
      </div>
    </DashboardLayout>
  );
}
