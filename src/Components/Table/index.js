import React from "react";
import { TableWrapper } from "../../Styled/Table.style";

function index() {
  const data = [
    { id: 1, name: "Aline Chastel Lima" },
    { id: 2, name: "Bruno Sousa Freitas" },
    { id: 3, name: "Carlos Cezar Girao de Arrua" },
    { id: 4, name: "Carlos Henrique de Carvalho Filho" },
  ];
  return (
    <TableWrapper>
      <table cellSpacing="1" cellPadding="3">
        <tbody>
          <tr className="title">
            <td colSpan="5">
              <span>Ana Paula Fontes Martins Chiodaro</span>
            </td>
          </tr>
          <tr className="tablerow">
            <td>
              <div align="center">
                <strong>Período</strong>
              </div>
            </td>
            <td>
              <div align="center">
                <strong>Receita Líquida </strong>
              </div>
            </td>
            <td>
              <div align="center">
                <strong>Custo Fixo </strong>
              </div>
            </td>
            <td>
              <div align="center">
                <strong>Comissão</strong>
              </div>
            </td>
            <td>
              <div align="center">
                <strong>Lucro</strong>
              </div>
            </td>
          </tr>
          <tr className="tablerow">
            <td nowrap="">Janeiro de 2007</td>
            <td>
              <div align="right">R$ 1.500,00</div>
            </td>
            <td>
              <div align="right">- R$ 2.000,00</div>
            </td>
            <td>
              <div align="right">- R$ 1.000,00</div>
            </td>
            <td>
              <div align="right">
                <font color="#FF0000">- R$ 1.500,00</font>
              </div>
            </td>
          </tr>
          <tr className="tablerow">
            <td nowrap="">Fevereiro de 2007 </td>
            <td>
              <div align="right">R$ 25.000,00</div>
            </td>
            <td>
              <div align="right">- R$ 2.000,00</div>
            </td>
            <td>
              <div align="right">- R$ 2.500,00</div>
            </td>
            <td>
              <div align="right">R$ 20.500,00</div>
            </td>
          </tr>
          <tr className="tableFooter">
            <td>
              <strong>SALDO</strong>
            </td>
            <td>
              <div align="right">
                <font color="#000000">R$ 26.500,00</font>
              </div>
            </td>
            <td>
              <div align="right">
                <font color="#000000">- R$ 4.000,00</font>
              </div>
            </td>
            <td>
              <div align="right">
                <font color="#000000">- R$ 3.500,00</font>
              </div>
            </td>
            <td>
              <div align="right">
                <font color="#0000FF">R$ 19.000,00</font>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </TableWrapper>
  );
}

export default index;
