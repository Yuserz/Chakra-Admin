import "../Styles/main.less";
import "../Styles/Dashboard/Table.less";
import React from "react";
import icons from "../assets/assets";
import user1 from "../assets/icons/users/u1.png";
import user2 from "../assets/icons/users/u2.png";
import user3 from "../assets/icons/users/u3.png";
import user4 from "../assets/icons/users/u4.png";
import user5 from "../assets/icons/users/u5.png";
import user6 from "../assets/icons/users/u6.png";

const rows = [
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user1,
    action: "Edit",
  },
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user2,
    action: "Edit",
  },
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user3,
    action: "Edit",
  },
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user4,
    action: "Edit",
  },
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user5,
    action: "Edit",
  },
  {
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    function: "Manager",
    info: "Organization",
    status: "Online",
    employed: "14/06/21",
    image: user6,
    action: "Edit",
  },
];

export default function AuthorsTable() {
  return (
    <table className="author-table-wrapper">
      <thead>
        <tr>
          <th align="left">AUTHOR</th>
          <th align="left">FUNCTION</th>
          <th align="left">STATUS&nbsp;</th>
          <th align="left">EMPLOYED&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="row-divider">
            <td component="tr" scope="row">
              <div className="td-wrapper">
                <img src={row.image} alt="" />
                <div>
                  {row.name}
                  <p className="email">{row.email}</p>
                </div>
              </div>
            </td>

            <td align="left">
              <div>
                {row.function}
                <p className="info">{row.info}</p>
              </div>
            </td>
            <td align="left">{row.status}</td>
            <td align="left">{row.employed}</td>
            <td className="action" align="left">{row.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
