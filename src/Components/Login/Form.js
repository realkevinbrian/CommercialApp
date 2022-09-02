/***
 * Form Component for Login Page
 * With basic Authetication
 */
import React, { useState } from "react";
import { LoginFormWrapper } from "../../Styled/Login.Styled";
import { InputGroup, InputLabel, InputText } from "../../Styled/Inputs.styled";
import { Alert, Icon } from "@mui/material";
import { Email, LockRounded, PersonOutlineOutlined } from "@mui/icons-material";
import { PrimaryButton } from "../../Styled/Buttons.styled";
import { useNavigate } from "react-router-dom";

function Form() {
  const user = { email: "admin@agence.br", password: "admin123" };
  const navigate = useNavigate();

  //userInfo
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  // Simple Authetication
  function handleLogin({ self }) {
    self.preventDefault();

    if (email === user.email && password === user.password) {
      navigate("/desempenho");
      localStorage.setItem("userInfo", true);
    } else {
      setMessage("Email ou Password Incorrecto!");
    }
  }

  return (
    <LoginFormWrapper>
      <div className="FormContainer">
        <div className="FormTitle">
          <h4>Login</h4>
          <p>Insere os credentials para accessar o sistema</p>
        </div>

        <form onSubmit={(self) => handleLogin({ self })}>
          {message && <Alert severity="error">{message}</Alert>}
          <InputGroup>
            <InputLabel>
              <Icon>
                <Email />
              </Icon>
            </InputLabel>
            <InputText
              required
              onChange={(self) => {
                setEmail(self.target.value);
                setMessage(null);
              }}
              type="email"
              placeholder="Email"
            />
          </InputGroup>

          <InputGroup>
            <InputLabel>
              <Icon>
                <LockRounded />
              </Icon>
            </InputLabel>
            <InputText
              required
              onChange={(self) => {
                setPassword(self.target.value);
                setMessage(null);
              }}
              type="password"
              placeholder="Passcode"
            />
          </InputGroup>

          <PrimaryButton type="submit">Accessar</PrimaryButton>
        </form>
      </div>
    </LoginFormWrapper>
  );
}

export default Form;
