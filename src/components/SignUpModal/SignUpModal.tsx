/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import RegisterForm from './component/RegisterForm';
import { RootContext } from '@/layouts/Root';

const RegisterModalContainer = styled.div`
  width: 30rem;
  height: 36rem;
  background-color: black;
`;

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

const HeaderContainer = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
  display: flex;
  color: white;
  justify-content: center;
`;

const TermAndPrivacyContainer = styled.div`
  margin-top: 1rem;
  height: 2rem;
  width: auto;
  display: flex;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: gray;
  margin: 0 1rem;
  text-decoration: underline;
  font-size: 0.8rem;
`;

type Props = {
  setModalIsOpen: () => void;
};

const RegisterModal: React.FC<Props> = (props: Props) => (
  <RegisterModalContainer>
    <BackAndCloseButtonContainer>
      <RootContext.Consumer>
        {(value) => {
          return (
            <BackButton
              onClick={(event) => {
                value.changeDisplayLogInPopWindow(event, true);
              }}
            >
              {'<'} Back
            </BackButton>
          );
        }}
      </RootContext.Consumer>
      <CloseButton onClick={props.setModalIsOpen}>X</CloseButton>
    </BackAndCloseButtonContainer>
    <HeaderContainer>Sign Up</HeaderContainer>
    <RegisterForm />
    <TermAndPrivacyContainer>
      <FooterLink href="www">Terms of User</FooterLink>
      <FooterLink href="www">privacy policy</FooterLink>
    </TermAndPrivacyContainer>
  </RegisterModalContainer>
);

export default RegisterModal;
