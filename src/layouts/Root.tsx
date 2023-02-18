/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import LoginButton from '@/components/LoginButton';
import Footer from '@/components/Footer';
import SignUpModal from '@/components/SignUpModal';

export const RootContext = React.createContext<(show: boolean) => void>(() => {});

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

  const changeModalToOpen = (show: boolean) => {
    setModalIsOpen(show);
  };

  return (
    <RootContext.Provider value={changeModalToOpen}>
      <PageWrapper>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
        >
          <SignUpModal
            setModalIsOpen={() => {
              setModalIsOpen(false);
            }}
          />
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
