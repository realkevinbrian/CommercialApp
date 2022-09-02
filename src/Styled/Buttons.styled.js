/*****
 * Buttons Styled Components
 * Create a default button to use as a template
 */

import styled from "styled-components";

export const defaultButton = styled.button`
  align-items: center;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
`;

export const PrimaryButton = styled(defaultButton)`
  background-color: ${({ theme }) => theme.colors.trueBlue};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.raisinBlack};
  }
`;

export const PrimaryButtonOutlined = styled(defaultButton)`
  border: 1px solid black;
`;

export const SecondButtonIcon = styled(PrimaryButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
`;
