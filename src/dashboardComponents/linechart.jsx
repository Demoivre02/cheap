import React from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";
import { Icon } from '@iconify/react';

const data = [
  {
    name: "FEB",
    Earned: 4000,
    Forecasted: 2400,
    amt: "100M"
  },
  {
    name: "MAR",
    Earned: 3000,
    Forecasted: 1398,
    amt: "50M"
  },
  {
    name: "APR",
    Earned: 2000,
    Forecasted: 9800,
    amt: "10M"
  },
  {
    name: "MAY",
    Earned: 2780,
    Forecasted: 3908,
    amt: 2000
  },
  {
    name: "JUN",
    Earned: 1890,
    Forecasted: 4800,
    amt: 2181
  },
  {
    name: "JUL",
    Earned: 2390,
    Forecasted: 3800,
    amt: 2500
  }
];

export default function Linechart() {
  return (
    <div className="h-[50vh] w-[90%]">

      <div className="flex justify-between m4-8 mb-2 w-[95%] m-auto  items-center"> 
        <p className="semi-bold">Analysis</p>
        <Icon className="cursor-pointer" icon="material-symbols:more-vert" color="#333" width="30" />
      </div>

      <div className="flex justify-between ml-5 lg:border-2 p-3 my-6 w-[12%] items-center">
        <p>Week</p>
        <Icon icon="material-symbols:arrow-drop-down" color="#333" width="25" />
      </div>

        <ResponsiveContainer  width="100%"  height="80%">
            <LineChart
            width={1000}
            height={800}
            data={data}
            margin={{
                right: 30,
                left: 20,
            }}
            >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="Forecasted"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Earned" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}
