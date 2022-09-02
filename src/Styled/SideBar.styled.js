/****
 * SideBar Component
 */
import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
`;
export const SideBarTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 9px 10px;
  background-color: ${({ theme }) => theme.colors.raisinBlack};

  //button in title
  button {
    color: ${({ theme }) => theme.colors.white};
    padding: 5px;
  }

  //logo
  > img {
    width: 70px;
    padding: 5px;
    filter: invert(1);
  }
`;
export const SideBarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  padding-top: 2rem;

  .activeLink {
    background-color: ${({ theme }) => theme.colors.raisinBlack};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 1px 10px 1px #bbb;
    border: 1px solid transparent;
  }
`;
export const SideBarLink = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  padding: 10px;
  gap: 10px;
  transition: all 0.3s linear;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.raisinBlack};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 1px 10px 1px #bbb;
    border: 1px solid transparent;
  }
`;
