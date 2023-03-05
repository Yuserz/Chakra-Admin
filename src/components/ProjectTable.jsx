import "../Styles/main.less";
import React from "react";
import icons from "../assets/assets";

function createData(name, members, budget, completion) {
  return { name, members, budget, completion};
}

const rows = [
  createData("Chakra Soft UI", 159, '$14,000', 24),
  createData("Chakra Soft UI", 159, '$14,000', 24),
  createData("Chakra Soft UI", 159, '$14,000', 24),
  createData("Chakra Soft UI", 159, '$14,000', 24),
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
            
            <td component="tr" scope="row"><div className="td-wrapper"><img src={icons.xd} alt="" />
              {row.name}
              </div>
            </td>
            <td align="left">{row.members}</td>
            <td align="left">{row.budget}</td>
            <td align="left">{row.completion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
