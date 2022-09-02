/****
 * Inputs Styled Components for reusability and Performance
 */

import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputText = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  background-color: transparent;
`;
