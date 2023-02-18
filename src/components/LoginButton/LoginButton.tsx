import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  width: 8rem;
  float: right;
  font-weight: 600;
  background: linear-gradient(-135deg, transparent 10px, #6ddb03 0);
`;

type Props = {
  setModalIsOpen: () => void;
};

const LoginButton: React.FC<Props> = (props: Props) => {
  return (
    <Button
      type="button"
      // eslint-disable-next-line react/destructuring-assignment
      onClick={props.setModalIsOpen}
    >
      LOGIN / SIGNUP
    </Button>
  );
};

export default LoginButton;
