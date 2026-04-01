"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface ChartData {
  week: string;
  products: number;
}

export default function ProductChart({ data }: { data: ChartData[] }) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onContextMenu={(_, e) => e.preventDefault()}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" niceTicks="snap125" />
          <YAxis width="auto" niceTicks="snap125" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            labelStyle={{ color: "#374151", fontWeight: "500" }}
          />
          <Area
            type="monotone"
            dataKey="products"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={{ fill: "#8b5cf6", r: 2 }}
            activeDot={{ fill: "#8b5cf6", r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
