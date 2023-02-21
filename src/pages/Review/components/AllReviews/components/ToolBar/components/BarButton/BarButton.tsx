import styled from 'styled-components';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

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

  background-color: #222430;
  color: #ffffff;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: #6ddb03;
    color: #3d3d3d;
  }
`;

const BarButton = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default BarButton;
