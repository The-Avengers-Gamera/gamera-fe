import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer';
import LoginButton from '@/components/LoginButton';
// import LoginForm from '@/components/Login/loginForm';

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
  overflow-y: scroll;
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
      {/* <LoginForm /> */}
      <Footer />
    </Main>
  </PageWrapper>
);

export default RootLayout;
