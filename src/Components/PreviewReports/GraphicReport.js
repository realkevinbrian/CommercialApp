import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GraphicReportContainer } from "../../Styled/ReportPreview.style";

function GraphicReport() {
  const navigate = useNavigate();

  const data = [
    {
      month: "Jan",
      name: 2000,
      valor: 1400,
    },
    {
      month: "Fev",
      name: 3000,
      valor: 1398,
    },
    {
      month: "Abr",
      name: 2000,
      valor: 9800,
    },
    {
      month: "Mar",
      name: 2780,
      valor: 3908,
    },
    {
      month: "Maio",
      name: 1890,
      valor: 4800,
    },
    {
      month: "Jun",
      name: 2390,
      valor: 3800,
    },
    {
      month: "Jul",
      name: 3490,
      valor: 4300,
    },
  ];

  return (
    <GraphicReportContainer>
      <div className="title">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <div>
          <h3>Performance Comercial</h3>
          <small>28 de Janeiro a 29 de Fevereiro de 2007</small>
        </div>
      </div>
      <div className="graphic">
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="name"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="name" barSize={20} fill="#413ea0" />
          <Bar dataKey="name" barSize={20} fill="#41e43ea0" />
          <Bar dataKey="name" barSize={20} fill="#4543ff" />
          <Line type="monotone" dataKey="name" stroke="#45433f" />
        </ComposedChart>
      </div>
    </GraphicReportContainer>
  );
}

export default GraphicReport;

{
  /* <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="valor" fill="#8884d8" />
          <Bar dataKey="name" fill="#82ca9d" />
          <Bar dataKey="name" fill="#786262" />
        </BarChart> */
}
