/***
 * In this component we display Table Report
 */

import React, { useState } from "react";
import { TableReportContainer } from "../../Styled/ReportPreview.style";
import BackDrop from "../Mui_Components/BackDrop";
import MuiTable from "../Mui_Components/MuiTable";
import Table from "../Table";

function TableReports(props) {
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
        <h3>Relatorio</h3>
        {data.map((item) => (
          <Table key={item.name} />
        ))}
      </TableReportContainer>
    </>
  );
}

export default TableReports;
