import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import LoginButton from '@/components/LoginButton';

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
  z-index: 3;
  position: relative;
  top: 3rem;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 4rem;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
`;

const RootLayout = () => (
  <PageWrapper>
    <NavWrapper>
      <NavBar />
    </NavWrapper>
    <Main>
      <LoginButtonWrapper>
        <LoginButton />
      </LoginButtonWrapper>
      <Outlet />
    </Main>
  </PageWrapper>
);

export default RootLayout;
