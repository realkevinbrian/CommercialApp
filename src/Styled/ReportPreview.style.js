import styled from "styled-components";

export const TableReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  background-color: #f2f2f2;


  div.title {
    display: flex;
    align-items: center;

    h3 {
      flex: 1;
      text-align: center;
    }
  }
`;
export const PizzaReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding-top: 5rem;
  gap: 3rem;

  /* title */
  .title {
    display: flex;
    align-items: center;

    div {
      text-align: center;
      flex: 1;
    }
  }
`;
export const GraphicReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  padding-top: 5rem;
  gap: 3rem;

  /* title */
  .title {
    display: flex;
    align-items: center;

    div {
      text-align: center;
      flex: 1;
    }
  }

  /* graphic */
  .graphic {
  }
`;
