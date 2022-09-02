/****
 * Side Banner on login Page
 */

import React from "react";
import { LoginBanner } from "../../Styled/Login.Styled";
import sample from "../../Assets/images/loginBanner.jpg";
import logo from "../../Assets/images/logo.gif";

function Banner() {
  return (
    <LoginBanner>
      <img id="banner" src={sample} alt="Media" />
      <div id="overlay">
        <div id="overlay__content">
          <img src={logo} alt="Media" />
          <h5>Bem vindo a Agence Commerce App</h5>
        </div>
      </div>
    </LoginBanner>
  );
}

export default Banner;
