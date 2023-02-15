import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const NavWrapper = styled.div`
  width: 15%;
  flex: none;
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
      <Outlet />
    </Main>
  </PageWrapper>
);

export default RootLayout;
