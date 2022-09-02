/****
 * Inputs Styled Components for reusability and Performance
 */

import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.cleanGrey};
  gap: 0.4rem;
  padding: 1px 10px;
`;
export const InputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputText = styled.input`
  display: flex;
  padding: 0.6rem 0;
  flex-direction: column;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  background-color: transparent;
`;

/***
 * SearchBox
 */

export const SearchBoxContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  button {
    background-color: ${({ theme }) => theme.colors.raisinBlack};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

/***
 * Date pick
 */

export const InputDateContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.raisinBlack};
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  gap: 5px;

  > div {
    input[type="date"] {
      border: 1px solid ${({ theme }) => theme.colors.raisinBlack};
      padding: 5px 10px;
      margin: 0 5px;
      background-color: ${({ theme }) => theme.colors.white};

      &:nth-child(1) {
        background-color: ${({ theme }) => theme.colors.raisinBlack};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
