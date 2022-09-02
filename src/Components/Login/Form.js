/***
 * Form Component for Login Page
 */
import React from "react";
import { LoginFormWrapper } from "../../Styled/Login.Styled";
import { InputGroup, InputLabel, InputText } from "../../Styled/Inputs.styled";
import { Icon } from "@mui/material";
import { LockRounded, PersonOutlineOutlined } from "@mui/icons-material";
import { PrimaryButton } from "../../Styled/Buttons.styled";

function Form() {
  return (
    <LoginFormWrapper>
      <div className="FormContainer">
        <div className="FormTitle">
          <h4>Login</h4>
          <p>Insere os credentials para accessar o sistema</p>
        </div>

        <form>
          <InputGroup>
            <InputLabel>
              <Icon>
                <PersonOutlineOutlined />
              </Icon>
            </InputLabel>
            <InputText type="text" placeholder="Nome do usuario" />
          </InputGroup>

          <InputGroup>
            <InputLabel>
              <Icon>
                <LockRounded />
              </Icon>
            </InputLabel>
            <InputText type="password" u placeholder="Passcode" />
          </InputGroup>

          <PrimaryButton>Accessar</PrimaryButton>
        </form>
      </div>
    </LoginFormWrapper>
  );
}

export default Form;
