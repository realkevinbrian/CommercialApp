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
import { useNavigate } from "react-router-dom";

function SideMenu(props) {
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
    { title: "Comercial", icon: <Person2Outlined />, link: "/desempenho" },
    { title: "Financeiro", icon: <NoteAlt />, link: "/financeiro" },
    { title: "Usuario", icon: <CardMembership />, link: "/usuario" },
  ];

  //create a function to handleNavigate
  const navigate = useNavigate();
  const handleNavigate = ({ self, link }) => {
    props.setOpen(false);
    navigate(link);
    /**
     * Implementing Button Active state Functionality
     */
    //get current
    let current = document.getElementsByClassName("activeLink");
    //remove class Name on current
    if (current.length > 0) {
      current[0].className = current[0].className.replace("activeLink", "");
    }
    //add to the clicked target
    self.currentTarget.className += " activeLink";
  };

  return (
    <SwiperDrawer state={props.state} setOpen={props.setOpen}>
      <SideBarContainer>
        <SideBarTitle>
          <IconButton onClick={() => props.setOpen(false)}>
            <CloseOutlined />
          </IconButton>
          <img className="logo" src={logo} alt="logoOfficial" />
        </SideBarTitle>

        <SideBarBody>
          {Array.from(List).map((item) => (
            <SideBarLink
              key={item.title}
              className={item.className}
              onClick={(self) => handleNavigate({ self, link: item.link })}
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
