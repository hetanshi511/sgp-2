import React, { PureComponent } from "react";
import "./Placementstats.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Placementstats = () => {
  const data = [
    { year: "2016-17", numberofCompanyvisited: 297 },
    { year: "2017-18", numberofCompanyvisited: 315 },
    { year: "2018-19", numberofCompanyvisited: 344 },
    { year: "2019-20", numberofCompanyvisited: 123 },
  ];

  const package1 = [
    {
      name: "Highest Package Offered(Lakhs)",
      year: "2014-15",
      HighestPackageOfferedLakhs: 9,
    },
    {
      name: "Highest Package Offered(Lakhs)",
      year: "2015-16",
      HighestPackageOfferedLakhs: 18,
    },
    {
      name: "Highest Package Offered(Lakhs)",
      year: "2016-17",
      HighestPackageOfferedLakhs: 15.6,
    },
    {
      name: "Highest Package Offered(Lakhs)",
      year: "2017-18",
      HighestPackageOfferedLakhs: 10.5,
    },
    {
      name: "Highest Package Offered(Lakhs)",
      year: "2018-19",
      HighestPackageOfferedLakhs: 10.5,
    },
  ];

  const student = [
    { year: "2014-15", studentsplaced: 778 },
    { year: "2015-16", studentsplaced: 876 },
    { year: "2016-17", studentsplaced: 940 },
    { year: "2017-18", studentsplaced: 987 },
    { year: "2018-19", studentsplaced: 994 },
  ];
  return (
    <section className="pstats">
      <h1 className="pl">Placement Statistics</h1>
      <div className="graphs">
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="year"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="numberofCompanyvisited"
            fill="#3498db"
            background={{ fill: "#eee" }}
          />
        </BarChart>
        <BarChart
          width={500}
          height={400}
          data={package1}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="year"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="HighestPackageOfferedLakhs"
            fill="#3498db"
            background={{ fill: "#eee" }}
          />
        </BarChart>
        <BarChart
          width={500}
          height={400}
          data={student}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="year"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="studentsplaced"
            fill="#3498db"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </div>
    </section>
   
  );
};

export default Placementstats;
