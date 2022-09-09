/***
 * In this component we display Table Report
 */

import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { TableReportContainer } from "../../Styled/ReportPreview.style";
import BackDrop from "../Mui_Components/BackDrop";
import MuiTable from "../Mui_Components/MuiTable";
import Table from "../Table";
import useBack from "../../Helpers/useBack";
import { useNavigate } from "react-router-dom";

function TableReports(props) {
  const navigate = useNavigate(-1);

  const data = [
    { name: "Kevin Brian", id: 1 },
    { name: "Reis", id: 2 },
    { name: "Kito", id: 3 },
    { name: "Melaine", id: 4 },
    { name: "Neema", id: 5 },
  ];

  return (
    <>
      <TableReportContainer>
        <div className="title">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <h3>Relatorio</h3>
        </div>
        {data.map((item) => (
          <Table key={item.name} />
        ))}
      </TableReportContainer>
    </>
  );
}

export default TableReports;
