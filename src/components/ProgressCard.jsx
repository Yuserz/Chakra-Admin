import React from "react";
import "../Styles/Dashboard/progressCard.less";
import ProjectTable from "../components/ProjectTable";
import OrderOverview from "../components/OrderOverview";
import icons from "../assets/assets";

export default function ProgressCard() {
  return (
    <div className="progress-container">
      <div className="left">
        <div className="card">
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
            <div className="right-top btn">
              <img src={icons.moreBtn} alt="btn" />
            </div>
          </div>
          <div className="table">
            <ProjectTable />
          </div>
        </div>
      </div>

      <div className="right">
        <OrderOverview />
      </div>
    </div>
  );
}
