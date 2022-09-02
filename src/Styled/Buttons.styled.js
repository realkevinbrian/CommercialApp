/*****
 * Buttons Styled Components
 * Create a default button to use as a template
 */

import styled from "styled-components";

export const defaultButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  background-color: transparent;
`;

export const primaryButton = styled(defaultButton)``;

export const primaryButtonOutlined = styled(defaultButton)`
  border: 1px solid black;
`;
