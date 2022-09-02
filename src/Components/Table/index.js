import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function index() {
  const data = [
    { id: 1, name: "Aline Chastel Lima" },
    { id: 2, name: "Bruno Sousa Freitas" },
    { id: 3, name: "Carlos Cezar Girao de Arrua" },
    { id: 4, name: "Carlos Henrique de Carvalho Filho" },
  ];
  return (
    <TableContainer>
      <Table>
        <TableHead className="TableHead">
          <TableRow>
            <TableCell>
              <h5>Nomes</h5>
            </TableCell>

            <TableCell align="right">
              <h5>Selecione</h5>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.from(data).map((item) => (
            <TableRow>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default index;
