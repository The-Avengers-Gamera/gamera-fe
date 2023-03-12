import styled from 'styled-components';
import useModal from '@/context/loginModal';

const Button = styled.button`
  border: none;
  height: 100%;
  width: 100%;
  display: block;
  clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%);

  background: #6ddb03;
  cursor: pointer;
  font-weight: Semibold;
  font-family: Poppins;
`;

const LoginButton = () => {
  const { setModalIsOpen } = useModal();

  return (
    <Button
      type="button"
      onClick={() => setModalIsOpen(true)}
    >
      LOGIN / SIGN UP
    </Button>
  );
};

export default LoginButton;
