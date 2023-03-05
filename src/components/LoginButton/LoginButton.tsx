import styled from 'styled-components';
import useModal from '@/context/loginModal';

const Button = styled.button`
  border: none;
  width: 8rem;
  float: right;
  font-weight: 600;
  background: linear-gradient(-135deg, transparent 10px, #6ddb03 0);
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
