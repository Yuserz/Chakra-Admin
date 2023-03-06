import "../Styles/main.less";
import React from "react";
import icons from "../assets/assets";
import user1 from "../assets/icons/users/Avatar 1.png";
import user2 from "../assets/icons/users/Avatar 2.png";
import user3 from "../assets/icons/users/Avatar 3.png";
import user4 from "../assets/icons/users/Avatar 4.png";
import user5 from "../assets/icons/users/Avatar 5.png";

const rows = [
  {
    name: "Chakra Soft UI Version",
    members: [user1, user2, user3, user4, user5],

    budget: "$14,000",
    completion: "60%",
    image: icons.xd,
  },
  {
    name: "Add Progress Track",
    members: [user1, user2],

    budget: "$3,000",
    completion: "10%",
    image: icons.progress,
  },
  {
    name: "Fix Platform Errors",
    members: [user1, user2],
    budget: "Not Set",
    completion: "100%",
    image: icons.slack,
  },
  {
    name: "Launch our Mobile App",
    members: [user1, user2, user3, user4],

    budget: "$32,000",
    completion: "100%",
    image: icons.spotify,
  },
  {
    name: "Add the New Pricing Page",
    members: [user1, user2, user3, user4, user5],
    budget: "$400",
    completion: "25%",
    image: icons.pricing,
  },
  {
    name: "Redesign New Online Shop",
    members: [user1, user2],
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
          <tr key={row.name} className="dataRow">
            <td component="tr" scope="row">
              <div className="td-wrapper">
                <img src={row.image} alt="" />
                {row.name}
              </div>
            </td>
            <td>
              <div className="memberImg">
                {row.members.map((member, index) => (
                  <div className="member-img">
                    <div>
                      <img key={index} src={member} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </td>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
