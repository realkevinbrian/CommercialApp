/***
 * Styled Components for Table
 */
import styled from "styled-components";

export const PerformanceTableWrapper = styled.div`
  border: 1px solid;
  margin: 0.5rem 1rem;

  .TableHead {
    background-color: ${({ theme }) => theme.colors.raisinBlack}!important;

    h5 {
      color: white !important;
    }
  }
`;
