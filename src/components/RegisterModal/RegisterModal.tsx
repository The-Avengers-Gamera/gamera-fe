import React, { useState } from 'react';
import styled from 'styled-components';
import BackAndClose from './component/BackAndClose';
import Header from './component/Header';
import RegisterForm from './component/RegisterForm';
import TermAndPrivacy from './component/TermsAndPrivacy';

const RegisterModalContainer = styled.div`
  width: 30rem;
  height: 36rem;
  background-color: black;
`;

const RegisterModal = () => {
  const [visibility, setVisibility] = useState(true);

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {visibility && (
        <RegisterModalContainer>
          <BackAndClose changeVisibility={changeVisibility} />
          <Header />
          <RegisterForm />
          <TermAndPrivacy />
        </RegisterModalContainer>
      )}
    </>
  );
};

export default RegisterModal;
