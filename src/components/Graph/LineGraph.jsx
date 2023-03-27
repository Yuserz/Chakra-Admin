import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    high: 500,
    low: 120,
    amt: 500,
  },
  {
    name: "Feb",
    high: 450,
    low: 320,
    amt: 500,
  },
  {
    name: "Mar",
    high: 400,
    low: 300,
    amt: 500,
  },
  {
    name: "Apr",
    high: 460,
    low: 90,
    amt: 500,
  },
  {
    name: "May",
    high: 390,
    low: 120,
    amt: 500,
  },
  {
    name: "Jun",
    high: 290,
    low: 120,
    amt: 500,
  },
  {
    name: "Jul",
    high: 350,
    low: 120,
    amt: 500,
  },
  {
    name: "Aug",
    high: 390,
    low: 220,
    amt: 500,
  },
  {
    name: "Sep",
    high: 490,
    low: 320,
    amt: 500,
  },
  {
    name: "Oct",
    high: 500,
    low: 290,
    amt: 500,
  },
  {
    name: "Nov",
    high: 200,
    low: 120,
    amt: 500,
  },
  {
    name: "Dec",
    high: 490,
    low: 120,
    amt: 500,
  },
];

export default function LineGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: -5,
          left: -35,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 5" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          axisTick={false}
          axisColor="000000"
          tick={{
            interval: 100,
            fontSize: 10,
            fill: "#CBD5E0",
          }}
        />
        <YAxis
          domain={[0, 500]}
          tickCount={6}
          axisLine={false}
          tickLine={false}
          tick={{
            interval: 100,
            fontSize: 10,
            fill: "#CBD5E0",
          }}
          yAxisId={0}
        />
        <Line
          type="basis"
          dataKey="high"
          strokeWidth={2}
          dot={false}
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Line
          type="basis"
          dataKey="low"
          strokeWidth={2}
          dot={false}
          stroke="#8884d8"
          fill="#82ca9d"
        />
        <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
