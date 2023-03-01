/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import LoginButton from '@/components/LoginButton';
import Footer from '@/components/Footer/Footer';
import SignUpModal from '@/components/SignUpModal';
import LoginForm from '@/components/Login/loginForm';

interface RootContextType {
  changeModalToOpen: (show: boolean) => void;
  changeDisplayLogInPopWindow: (
    event: React.MouseEvent<HTMLButtonElement>,
    status: boolean
  ) => void;
}

export const RootContext = React.createContext<RootContextType>({
  changeModalToOpen: () => {},
  changeDisplayLogInPopWindow: () => {},
});

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const NavWrapper = styled.div`
  width: 100px;
  flex: none;
`;

const LoginButtonWrapper = styled.div`
  height: 5%;
  float: right;
  position: relative;
  top: 3rem;
  display: flex;
  padding-right: 9rem;
`;

const Modal = styled(ReactModal)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const RootLayout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [displayLogInPopWindow, setDisplayLogInPopWindow] = useState(true);

  const changeModalToOpen = (show: boolean) => {
    setModalIsOpen(show);
  };

  const changeDisplayLogInPopWindow = (
    event: React.MouseEvent<HTMLButtonElement>,
    status: boolean
  ) => {
    setDisplayLogInPopWindow(status);
  };

  return (
    <RootContext.Provider value={{ changeModalToOpen, changeDisplayLogInPopWindow }}>
      <PageWrapper>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
        >
          {displayLogInPopWindow ? (
            <LoginForm />
          ) : (
            <SignUpModal
              setModalIsOpen={() => {
                setModalIsOpen(false);
              }}
            />
          )}
        </Modal>
        <NavWrapper>
          <NavBar />
        </NavWrapper>
        <Main>
          <LoginButtonWrapper>
            <LoginButton
              setModalIsOpen={() => {
                setModalIsOpen(true);
              }}
            />
          </LoginButtonWrapper>
          <Outlet />
          <Footer />
        </Main>
      </PageWrapper>
    </RootContext.Provider>
  );
};

export default RootLayout;
