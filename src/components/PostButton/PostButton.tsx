import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '@/context/auth';

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;
const Button = styled.button`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  display: block;
  clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%);
  background: #6ddb03;
  cursor: pointer;
  font-weight: 600;
  font-family: Poppins;
`;

const PostButton = () => {
  const [isPost, setIsPost] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/post', { replace: true });
    setIsPost((prev) => !prev);
  };

  return (
    <Container>
      {!isPost && (
        <Button
          type="button"
          onClick={() => handleClick()}
        >
          POST
        </Button>
      )}
    </Container>
  );
};

export default PostButton;
