import { LogoutOutlined, Menu } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React from "react";
import { TopBarContainer } from "../../Styled/AppBar.styled";
import { SecondButtonIcon } from "../../Styled/Buttons.styled";
import logo from "../../Assets/images/logo.gif"

function Topbar() {
  return (
    <TopBarContainer>
      
      <IconButton>
        <Menu />
      </IconButton>

      <img src={logo} alt="officialLogo" />

      <SecondButtonIcon>
        <Icon>
          <LogoutOutlined />
        </Icon>
        <small>Sair</small>
      </SecondButtonIcon>
   
    </TopBarContainer>
  );
}

export default Topbar;
