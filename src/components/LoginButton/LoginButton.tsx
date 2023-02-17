import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  width: 8rem;
  float: right;
  font-weight: 600;
  background: linear-gradient(-135deg, transparent 10px, #6ddb03 0);
`;

const LoginButton = () => <Button>LOGIN / SIGNUP</Button>;

export default LoginButton;
