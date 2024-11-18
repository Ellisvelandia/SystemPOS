"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", newCustomers: 400, returningCustomers: 240 },
  { name: "Feb", newCustomers: 300, returningCustomers: 139 },
  { name: "Mar", newCustomers: 200, returningCustomers: 980 },
  { name: "Apr", newCustomers: 278, returningCustomers: 390 },
  { name: "May", newCustomers: 189, returningCustomers: 480 },
  { name: "Jun", newCustomers: 239, returningCustomers: 380 },
];

export function CustomerStats() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="newCustomers" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="returningCustomers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}