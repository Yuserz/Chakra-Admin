import DashboardLayout from "../layouts/DashboardLayout";
import "../Styles/main.less";
import "../Styles/Dashboard/Table.less";
import React from "react";
import ProjectTable from "../components/ProjectTable";
import AuthorsTable from "../components/AuthorsTable";
import icons from "../assets/assets";

export default function Table() {
  return (
    <DashboardLayout>
      <div className="table-card">
      <div className="left-top">
            <p className="header">Authors Table</p>
   
        </div>
        <AuthorsTable />
      </div>
      <div className="table-card">
        <div className="left-top">
          <div className="box">
            <p className="header">Projects</p>
            <p className="text">
              <span>
                <img src={icons.check} alt="icon" /> 30 done
              </span>{" "}
              this month
            </p>
          </div>
        </div>
        <ProjectTable />
      </div>
    </DashboardLayout>
  );
}
