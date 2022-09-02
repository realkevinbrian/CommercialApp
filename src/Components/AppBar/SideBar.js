/****
 * SideBar Component
 */

import {
  AdminPanelSettingsOutlined,
  AssignmentOutlined,
  CardMembership,
  CloseOutlined,
  HomeOutlined,
  NoteAlt,
  Person2Outlined,
} from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React from "react";
import {
  SideBarBody,
  SideBarContainer,
  SideBarLink,
  SideBarTitle,
} from "../../Styled/SideBar.styled";
import SwiperDrawer from "../Mui_Components/SwiperDrawer";
import logo from "../../Assets/images/logo.gif";

function SideMenu() {
  /**
   * List of Side menu link
   */
  const List = [
    {
      title: "Agence",
      icon: <HomeOutlined />,
      link: "/agence",
      className: "activeLink",
    },
    { title: "Projectos", icon: <AssignmentOutlined />, link: "/projectos" },
    {
      title: "Administrativo",
      icon: <AdminPanelSettingsOutlined />,
      link: "/administrativo",
    },
    { title: "Comercial", icon: <Person2Outlined />, link: "/Comercial" },
    { title: "Financeiro", icon: <NoteAlt />, link: "/Financeiro" },
    { title: "Usuario", icon: <CardMembership />, link: "/usuario" },
  ];

  //create a function to handleNavigate
  const handleNavigate = ({ self }) => {
    /**
     * Implementing Button Active state Functionality
     */
    //get current
    let current = document.getElementsByClassName("activeLink");
    console.log(current.length);

    //remove class Name on current
    if (current.length > 0) {
      current[0].className = current[0].className.replace("activeLink", "");
    }
    //add to the clicked target
    self.currentTarget.className += " activeLink";
  };
  return (
    <SwiperDrawer state={true}>
      <SideBarContainer>
        <SideBarTitle>
          <IconButton>
            <CloseOutlined />
          </IconButton>
          <img className="logo" src={logo} alt="logoOfficial" />
        </SideBarTitle>

        <SideBarBody>
          {Array.from(List).map((item) => (
            <SideBarLink
              key={item.title}
              className={item.className}
              onClick={(self) => handleNavigate({ self })}
            >
              <Icon>{item.icon}</Icon>
              <small>{item.title}</small>
            </SideBarLink>
          ))}
        </SideBarBody>
      </SideBarContainer>
    </SwiperDrawer>
  );
}

export default SideMenu;
