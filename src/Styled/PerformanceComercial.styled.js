/***
 * Styled Components for Performance Comercial
 */

import styled from "styled-components";

export const PerformanceComercialContainer = styled.div`
  margin: 2rem;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  background-color: #f2f2f2;

`;
export const PerformanceComercialHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.raisinBlack};
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 7px 20px;
    transition: all 0.5s linear;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.raisinBlack};
      border: 1px solid transparent;
    }
  }

  button.activeResult {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.raisinBlack};
    border: 1px solid transparent;
  }
`;
export const PerformanceComercialAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  //actionHead
  .ActionHead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
    gap: 5px;

    //small
    small {
      background-color: ${({ theme }) => theme.colors.mustard};
      padding: 9px 20px;
      color: white;
      font-weight: bold;
    }
  }

  //ActionBody
  .ActionBody {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem 1rem;
    align-items: center;

    > .groupedButtons {
      display: flex;
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;

      button {
        gap: 10px;
      }
    }
  }
`;
export const PerformanceComercialBody = styled.div`
  flex: 1;
  padding: 4rem 0;
`;
