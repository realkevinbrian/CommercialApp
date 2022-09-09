import {
  BarChartOutlined,
  LocalPizzaOutlined,
  PieChartOutline,
} from "@mui/icons-material";
import { Icon } from "@mui/material";
import React, { useState } from "react";
import InputDate from "../Components/Inputs/InputDate";
import SearchBox from "../Components/Inputs/SearchBox";
import { SecondButtonIcon } from "../Styled/Buttons.styled";
import {
  PerformanceComercialAction,
  PerformanceComercialBody,
  PerformanceComercialContainer,
  PerformanceComercialHeader,
} from "../Styled/PerformanceComercial.styled";
import TransferList from "../Components/TransferList";
import { TransferListContext } from "../Context/TransferListContext";
import TableReports from "../Components/PreviewReports/TableReports";
import { useNavigate } from "react-router-dom";

function PerformanceComercial() {
  const navigate = useNavigate();
  const buttons = [
    { title: "Por Clientes", className: "activeResult" },
    { title: "Por Consultores" },
  ];

  //active button functionality
  function handleChange({ self }) {
    //
    let current = document.getElementsByClassName("activeResult");

    if (current.length > 0) {
      current[0].className = current[0].className.replace("activeResult", " ");
    }

    self.currentTarget.className += " activeResult";
  }

  const data = [
    { name: "Kevin Brian", id: 1 },
    { name: "Reis", id: 2 },
    { name: "Kito", id: 3 },
    { name: "Melaine", id: 4 },
    { name: "Neema", id: 5 },
  ];

  return (
    <TransferListContext.Provider value={data}>
      <PerformanceComercialContainer>
        <PerformanceComercialHeader>
          {Array.from(buttons).map((item) => (
            <button
              key={item.title}
              className={item.className}
              onClick={(self) => handleChange({ self })}
            >
              {item.title}
            </button>
          ))}
        </PerformanceComercialHeader>

        <PerformanceComercialAction>
          {/* <div className="ActionHead">
          <small>Mostrando Clientes</small>
        </div> */}

          <div className="ActionBody">
            <SearchBox />
            <InputDate />
            <div className="groupedButtons">
              <SecondButtonIcon
                onClick={() => navigate("/desempenho/relatorio")}
              >
                <Icon>
                  <BarChartOutlined />
                </Icon>
                Relatorio
              </SecondButtonIcon>

              <SecondButtonIcon onClick={() => navigate("/desempenho/pizza")}>
                <Icon>
                  <LocalPizzaOutlined />
                </Icon>
                Pizza
              </SecondButtonIcon>

              <SecondButtonIcon
                onClick={() => navigate("/desempenho/graficos")}
              >
                <Icon>
                  <PieChartOutline />
                </Icon>
                Graficos
              </SecondButtonIcon>
            </div>
          </div>
        </PerformanceComercialAction>

        <PerformanceComercialBody>
          <TransferList />
        </PerformanceComercialBody>
      </PerformanceComercialContainer>
    </TransferListContext.Provider>
  );
}

export default PerformanceComercial;
