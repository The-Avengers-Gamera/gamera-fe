import React from 'react';
import styled from 'styled-components';

const BackAndCloseButtonContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;
const BackButton = styled.button`
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #6bd607;
  background: none;
  border: none;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  margin-right: 0.3rem;
  background: none;
  border: none;
`;

const BackAndClose = () => (
  <BackAndCloseButtonContainer>
    <BackButton>{'<'} Back</BackButton>
    <CloseButton>X</CloseButton>
  </BackAndCloseButtonContainer>
);

export default BackAndClose;
