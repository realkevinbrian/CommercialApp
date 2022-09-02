import {
  BarChartOutlined,
  LocalPizzaOutlined,
  PieChartOutline,
  Report,
} from "@mui/icons-material";
import { CardMedia, Icon } from "@mui/material";
import React from "react";
import { PieChart } from "recharts";
import { PrimaryButton, SecondButtonIcon } from "../Styled/Buttons.styled";
import {
  PerformanceComercialAction,
  PerformanceComercialBody,
  PerformanceComercialContainer,
  PerformanceComercialHeader,
} from "../Styled/PerformanceComercial.styled";
import SearchBox from "../Components/Inputs/SearchBox";
import InputDate from "../Components/Inputs/InputDate";
import Table from "../Components/Table";
import { PerformanceTableWrapper } from "../Styled/Table.Styled";

function PerformanceComercial() {
  const buttons = [
    { title: "Clientes", className: "activeResult" },
    { title: "Consultores" },
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
        <PerformanceTableWrapper>
          <Table />
        </PerformanceTableWrapper>
      </PerformanceComercialBody>
    </PerformanceComercialContainer>
  );
}

export default PerformanceComercial;
