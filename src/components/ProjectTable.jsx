import "../Styles/main.less";
import React from "react";
import icons from "../assets/assets";

const rows = [
  {
    name: "Chakra Soft UI Version",
    members: "5",
    budget: "$14,000",
    completion: "60%",
    image: icons.xd,
  },
  {
    name: "Add Progress Track",
    members: "2",
    budget: "$3,000",
    completion: "10%",
    image: icons.progress,
  },
  {
    name: "Fix Platform Errors",
    members: "2",
    budget: "Not Set",
    completion: "100%",
    image: icons.slack,
  },
  {
    name: "Launch our Mobile App",
    members: "4",
    budget: "$32,000",
    completion: "100%",
    image: icons.spotify,
  },
  {
    name: "Add the New Pricing Page",
    members: "6",
    budget: "$400",
    completion: "25%",
    image: icons.pricing,
  },
  {
    name: "Redesign New Online Shop",
    members: "2",
    budget: "$7,600",
    completion: "40%",
    image: icons.onlineShop,
  },
];

export default function ProjectTable() {
  return (
    <table>
      <thead>
        <tr>
          <th align="left">COMPANIES</th>
          <th align="left">MEMBERS</th>
          <th align="left">BUDGET&nbsp;</th>
          <th align="left">COMPLETION&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} style={{ borderBottom: "1px solid gray" }}>
            <td component="tr" scope="row">
              <div className="td-wrapper">
                <img src={row.image} alt="" />
                {row.name}
              </div>
            </td>
            <td align="left">{row.members}</td>
            <td align="left">{row.budget}</td>
            <td align="left">
              <div className="progress-bar-container">
                {row.completion}
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: row.completion }}
                  ></div>
                </div>
              </div>
            </td>
            {/* <div className="bottom-line"></div> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
