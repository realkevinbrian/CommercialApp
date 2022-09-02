/****
 * Login Styled Component
 */

import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  height: 100vh;
  background-color: white;
`;

export const LoginBanner = styled.div`
  display: block;
  position: relative;

  //banner
  img#banner {
    width: 100%;
    height: 100%;
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
    display: block;
  }

  //overlay
  div#overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    background-color: #0909095e;

    //content
    #overlay__content {
      background-color: #fffffff2;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem 20px;
      border-radius: 0px 50px 0px 50px;
      border: 2px solid transparent;
      border-right-color: #0087ff;
    }
  }
`;

export const LoginFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
