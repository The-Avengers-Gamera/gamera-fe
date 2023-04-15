import styled from 'styled-components';
import useAuth from '@/context/auth';

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
  const {
    auth: { isLogin, isEditor },
    logout,
  } = useAuth();
  console.log(isEditor);
  console.log(isLogin);

  return <Button type="button">POST {isLogin}</Button>;
};

export default PostButton;
