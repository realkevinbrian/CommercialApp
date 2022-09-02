/****
 * This component contains AppBar Styled Sub Components
 */
import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 1px 1px 1px 1px #d2d2d2;

  //button inside
  button{
    border-radius: 50px;
    padding: 4px 15px;
  }
`;
