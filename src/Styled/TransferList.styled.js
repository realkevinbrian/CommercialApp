import styled from "styled-components";

export const TransferListContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  place-content: center;

  > .body {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: center;
    gap: 10px;
  }
`;

export const DataBoxWrapper = styled.div`
  border: 1px solid;
  min-height: 280px;
  max-height: 300px;
  min-width: 300px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  user-select: none;

  small {
    cursor: pointer;
    padding: 4px 7px;
  }

  small.selected {
    background-color: ${({ theme }) => theme.colors.trueBlue};
    color: white;
  }
`;

export const TransferButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
`;
