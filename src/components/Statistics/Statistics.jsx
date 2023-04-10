import React from "react";
import Banner from "../../utilities/Banner/Banner";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Banner title="Assignment Mark Chart"></Banner>
      <div className="my_conatiner my-32">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            width={500}
            height={200}
            data={datas}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="marks" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="assingment"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
