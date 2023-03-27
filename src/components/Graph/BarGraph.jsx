import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    bar: 300,
  },
  {
    name: "Page B",
    bar: 200,
  },
  {
    name: "Page C",
    bar: 100,
  },
  {
    name: "Page D",
    bar: 490,
  },
  {
    name: "Page E",
    bar: 450,
  },
  {
    name: "Page F",
    bar: 480,
  },
  {
    name: "Page G",
    bar: 300,
  },
  {
    name: "Page H",
    bar: 340,
  },
  {
    name: "Page I",
    bar: 150,
  },
];

export default function BarGraph(){
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={100}
        data={data}
        margin={{
          top: 30,
          right: 15,
          left: 0,
          bottom: 20,
        }}
      >
        <YAxis
          domain={[0, 500]}
          tickCount={6}
          axisLine={false}
          tickLine={false}
          tick={{
            interval: 100,
            fontSize: 10,
            fill: "#FFFFFF",
          }}
        />
        <Bar
          barSize={7}
          radius={[10, 10, 10, 10]}
          dataKey="bar"
          fill="#FFFFFF"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}


