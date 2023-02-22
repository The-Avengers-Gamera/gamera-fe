import styled from 'styled-components';

import { ReactNode } from 'react';

const StyledButton = styled.button`
  width: 130px;
  height: 45px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px 2px;
  border: none;

  margin-right: 10px;

  background-color: #222430; // TODO: manage the color using theme
  color: #ffffff; // TODO: manage the color using theme

  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.color.main};
    color: #3d3d3d; // TODO: manage the color using theme
  }
`;

interface Props {
  children: ReactNode;
}

// this component represents a styled button in tool bar
const BarButton = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default BarButton;
