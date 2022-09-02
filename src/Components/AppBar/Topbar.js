import { LogoutOutlined, Menu } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import { TopBarContainer } from "../../Styled/AppBar.styled";
import { SecondButtonIcon } from "../../Styled/Buttons.styled";
import logo from "../../Assets/images/logo.gif";
import SideBar from "../AppBar/SideBar";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userInfo");
    navigate("/login");
  }

  return (
    <React.Fragment>
      <SideBar setOpen={setOpen} state={Open} />
      <TopBarContainer>
        <IconButton onClick={() => setOpen(true)}>
          <Menu />
        </IconButton>

        <img src={logo} alt="officialLogo" />

        <SecondButtonIcon onClick={() => handleLogout()}>
          <Icon>
            <LogoutOutlined />
          </Icon>
          <small>Sair</small>
        </SecondButtonIcon>
      </TopBarContainer>
    </React.Fragment>
  );
}

export default Topbar;
