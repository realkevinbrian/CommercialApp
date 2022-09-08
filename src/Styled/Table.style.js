import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  place-content: center;
  place-items: center;

  table {
    width: 100%;

    //tbody
    .title {
      background-color: ${({ theme }) => theme.colors.raisinBlack};
      color: white;
    }

    .tablerow {
      background-color: #fafafa;
    }

    //table footer
    .tableFooter {
      background-color: #efefef;
    }
  }
`;
