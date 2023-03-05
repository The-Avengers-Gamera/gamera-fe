import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import LoginButton from '@/components/LoginButton';
import Footer from '@/components/Footer/Footer';
import SignUpModal from '@/components/SignUpModal';
import LoginForm from '@/components/Login/LoginForm';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';

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
  const { auth } = useAuth();
  const { modalIsOpen, displayLogInPopWindow } = useModal();

  return (
    <PageWrapper>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
      >
        {displayLogInPopWindow ? <LoginForm /> : <SignUpModal />}
      </Modal>
      <NavWrapper>
        <NavBar />
      </NavWrapper>
      <Main>
        <>
          {!auth && (
            <LoginButtonWrapper>
              <LoginButton />
            </LoginButtonWrapper>
          )}
          <Outlet />
          <Footer />
        </>
      </Main>
    </PageWrapper>
  );
};

export default RootLayout;
