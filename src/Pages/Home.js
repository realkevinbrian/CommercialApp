import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../Components/AppBar/Topbar";
import PerformanceComercial from "./PerformanceComercial";
import { HomeContainer } from "../Styled/Home.styled";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import TableReports from "../Components/PreviewReports/TableReports";

function Home() {
  return (
    <React.Fragment>
      <ProtectedRoutes>
      <HomeContainer>
        <Topbar />
        <Routes>
          <Route index element={<PerformanceComercial />} />
          <Route path="desempenho" element={<PerformanceComercial />} />
          <Route path="desempenho/relatorio" element={<TableReports/>} />
          <Route path="agence" element={<h2>Agence</h2>} />
          <Route path="projectos" element={<h2>Projectos</h2>} />
          <Route path="administrativa" element={<h1>Administrativa</h1>} />
          <Route path="comercial" element={<h1>Administrativa</h1>} />
        </Routes>
      </HomeContainer>
      </ProtectedRoutes>
    </React.Fragment>
  );
}

export default Home;
