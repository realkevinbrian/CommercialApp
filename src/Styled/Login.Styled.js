/****
 * Login Styled Component
 */

import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  height: 100vh;
  background-color: white;
`;

export const LoginBanner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  //banner
  img#banner {
    width: 100%;
    height: 100%;
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
    /* display: none; */

    //content
    #overlay__content {
      background-color: #fffffff2;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 20px;
      /* border-radius: 0px 50px 0px 50px; */
      border: 2px solid transparent;
      border-right-color: #0087ff;
    }
  }
`;

export const LoginFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  background-color: #f0f0f0;

  .FormContainer {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 6rem 2rem;
    gap: 20px;
    margin: 1rem;

    //title
    .FormTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.7rem;
      text-align: center;

      h4 {
        font-size: ${({ theme }) => theme.typography.xl};
      }

      p {
        color: ${({ theme }) => theme.colors.cleanGrey};
        font-size: ${({ theme }) => theme.typography.md};
      }
    }

    //>form inside
    form {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;

      label {
        color: ${({ theme }) => theme.colors.trueBlue};
      }

      button {
        align-self: center;
        width: 40%;
        margin: .8rem 0;
      }
    }
  }
`;
