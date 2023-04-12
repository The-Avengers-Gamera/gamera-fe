import styled from 'styled-components';
import { useState } from 'react';
import RegisterForm from './component/RegisterForm';
import useModal from '@/context/loginModal';
import EmailVerify from '../VerifyMessage';

const ModalContainer = styled.div`
  width: 30rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: evenly;
`;

const RegisterModalContainer = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: rgba(36, 36, 41, 1); /* Black w/ opacity */
  display: flex;
  flex-direction: column;
  justify-content: evenly;
`;

const BackAndCloseButtonContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;
const BackButton = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  color: #6bd607;
  background: none;
  border: none;
  margin-left: 5%;
  margin-top: 2.5rem;
`;

const CloseButton = styled.button`
  width: 2rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: lighter;
  color: white;
  margin-right: 4%;
  background: none;
  border: none;
  margin-top: 2.7rem;
`;

const HeaderContainer = styled.div`
  margin-top: 6%;
  margin-bottom: 5%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
`;

const Header = styled.h1`
  color: rgba(205, 205, 205, 1);
  font-size: 36px;
`;

const TermAndPrivacyContainer = styled.div`
  margin-top: 9%;
  height: 20%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2rem;
`;

const FooterLink = styled.a`
  color: gray;
  margin: 0 1rem;
  text-decoration: underline;
  font-size: 0.8rem;
`;

const RegisterModal = () => {
  const { setModalIsOpen, changeDisplayLogInPopWindow } = useModal();

  return (
    <ModalContainer>
      <RegisterModalContainer>
        <BackAndCloseButtonContainer>
          <BackButton onClick={() => changeDisplayLogInPopWindow(true)}>{'<'} Back</BackButton>

          <CloseButton onClick={() => setModalIsOpen(false)}>&times;</CloseButton>
        </BackAndCloseButtonContainer>
        <HeaderContainer>
          <Header>SIGN UP</Header>
        </HeaderContainer>
        <RegisterForm />
        <TermAndPrivacyContainer>
          <FooterLink href="/term">Terms of User</FooterLink>
          <FooterLink href="/privacy">privacy policy</FooterLink>
        </TermAndPrivacyContainer>
      </RegisterModalContainer>
    </ModalContainer>
  );
};

export default RegisterModal;
