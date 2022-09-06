import {
  BarChartOutlined,
  LocalPizzaOutlined,
  PieChartOutline
} from "@mui/icons-material";
import { Icon } from "@mui/material";
import React from "react";
import InputDate from "../Components/Inputs/InputDate";
import SearchBox from "../Components/Inputs/SearchBox";
import { SecondButtonIcon } from "../Styled/Buttons.styled";
import {
  PerformanceComercialAction,
  PerformanceComercialBody,
  PerformanceComercialContainer,
  PerformanceComercialHeader
} from "../Styled/PerformanceComercial.styled";
import TransferList from "../Components/TransferList";

function PerformanceComercial() {
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

  return (
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
            <SecondButtonIcon>
              <Icon>
                <BarChartOutlined />
              </Icon>
              Relatorio
            </SecondButtonIcon>

            <SecondButtonIcon>
              <Icon>
                <LocalPizzaOutlined />
              </Icon>
              Pizza
            </SecondButtonIcon>

            <SecondButtonIcon>
              <Icon>
                <PieChartOutline />
              </Icon>
              Graficos
            </SecondButtonIcon>
          </div>
        </div>
      </PerformanceComercialAction>

      <PerformanceComercialBody>
        <TransferList/>
      </PerformanceComercialBody>
    </PerformanceComercialContainer>
  );
}

export default PerformanceComercial;
