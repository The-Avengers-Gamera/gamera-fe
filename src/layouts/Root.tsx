import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import NavBar from '@/components/NavBar/NavBar';
import LoginButton from '@/components/LoginButton';
import Footer from '@/components/Footer/Footer';
import SignUpModal from '@/components/SignUpModal';
import LoginForm from '@/components/Login/LoginForm';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';
import DropdownItem from '@/components/NavBar/components/DropdownItem';
import { useToggleWhenClickOutside } from '@/hooks/useToggleWhenClickOutside';
import useAxiosLoading from '@/hooks/useAxiosLoading';
import NotificationToast from '@/components/NotificationToast/NotificationToast';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  z-index: 1210;
  position: absolute;
  top: 0;
  left: 0;
`;

const NavWrapper = styled.div`
  width: 100px;
  flex: none;
`;

const LoginButtonWrapper = styled.div`
  height: 41px;
  width: 156px;
  position: absolute;
  top: 3rem;
  right: 10%;
`;

const Modal = styled(ReactModal)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const RootLayout = () => {
  const { auth } = useAuth();
  const { modalIsOpen, displayLogInPopWindow } = useModal();
  const expendBtnRef = useRef<HTMLButtonElement>(null);
  const [isMore, setIsMore] = useToggleWhenClickOutside(expendBtnRef, false);
  const [isLoading] = useAxiosLoading();

  return (
    <PageWrapper>
      {isLoading && (
        <LoadingWrapper>
          <LinearProgress />
        </LoadingWrapper>
      )}
      <NotificationToast />
      {isMore && <DropdownItem />}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 1200,
            background: 'rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        {displayLogInPopWindow ? <LoginForm /> : <SignUpModal />}
      </Modal>

      <NavWrapper>
        <NavBar
          setIsMore={setIsMore}
          expendBtnRef={expendBtnRef}
        />
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
