import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../Components/AppBar/Topbar";
import PerformanceComercial from "./PerformanceComercial";
import { HomeContainer } from "../Styled/Home.styled";

function Home() {
  return (
    <React.Fragment>
      <HomeContainer>
        <Topbar />
        {/* <SideBar/> */}
        <Routes>
          <Route index element={<h1>Comercial</h1>} />
          <Route path="desempenho" element={<PerformanceComercial />} />
          <Route path="agence" element={<h2>Agence</h2>} />
          <Route path="projectos" element={<h2>Projectos</h2>} />
          <Route path="administrativa" element={<h1>Administrativa</h1>} />
          <Route path="comercial" element={<h1>Administrativa</h1>} />
        </Routes>
      </HomeContainer>
    </React.Fragment>
  );
}

export default Home;
