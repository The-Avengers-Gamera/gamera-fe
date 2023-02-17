import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const NavWrapper = styled.div`
  width: 100px;
  flex: none;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;
const RootLayout = () => (
  <PageWrapper>
    <NavWrapper>
      <NavBar />
    </NavWrapper>
    <Main>
      <Outlet />
      <Footer />
    </Main>
  </PageWrapper>
);

export default RootLayout;
