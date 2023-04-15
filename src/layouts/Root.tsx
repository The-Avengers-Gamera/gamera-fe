import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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
import NavExpandButton from '@/components/NavExpandButton/NavExpandButton';
import PostButton from '@/components/PostButton/PostButton';

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-y: scroll;
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
  transition: 0.3s;

  @media (max-width: 850px) {
    position: absolute;
    height: 100%;
    // move left by 100px and hide
    transform: translateX(-100px);
    width: 0;
    z-index: 1200;
    // if isExpanded, show
    ${({ isNavExpanded }) => isNavExpanded && 'width: 100px; transform: translateX(0px);'}
  }
`;

const NavExpandButtonWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2000;
  transition: 0.3s;

  // if isExpanded, move right
  ${({ isNavExpanded }) => isNavExpanded && 'left: 120px;'}
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
`;

const RootLayout = () => {
  const {
    auth: { isLogin, isEditor },
  } = useAuth();
  const { modalIsOpen, displayLogInPopWindow } = useModal();
  const expendNavMoreRef = useRef<HTMLButtonElement>(null);
  const [isMore, setIsMore] = useToggleWhenClickOutside(expendNavMoreRef, false);
  const [isLoading] = useAxiosLoading();
  ReactModal.setAppElement('#root');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavExpanded, setIsNavExpanded] = useState(false); // for mobile

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

      {windowWidth < 850 && (
        <NavExpandButtonWrapper isNavExpanded={isNavExpanded}>
          <NavExpandButton
            isNavExpanded={isNavExpanded}
            setIsNavExpanded={setIsNavExpanded}
            expendNavMoreRef={expendNavMoreRef}
          />
        </NavExpandButtonWrapper>
      )}

      <NavWrapper isNavExpanded={isNavExpanded}>
        <NavBar
          setIsMore={setIsMore}
          expendNavMoreRef={expendNavMoreRef}
        />
      </NavWrapper>

      <Main>
        <>
          {!isLogin && (
            <LoginButtonWrapper>
              <LoginButton />
            </LoginButtonWrapper>
          )}
          {isEditor && (
            <LoginButtonWrapper>
              <PostButton />
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
