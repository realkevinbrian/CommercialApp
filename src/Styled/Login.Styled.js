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

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const LoginFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
