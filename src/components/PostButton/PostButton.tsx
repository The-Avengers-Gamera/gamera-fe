import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import useModal from '@/context/loginModal';

const Button = styled.button`
  border: none;
  height: 100%;
  width: 100%;
  display: block;
  clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%);
  background: #6ddb03;
  cursor: pointer;
  font-weight: 600;
  font-family: Poppins;
  font-size: 1rem;
`;

const PostButton = ({
  setPostButtonDisplay,
}: {
  setPostButtonDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Link to="/post">
      <Button
        type="button"
        onClick={() => {
          setPostButtonDisplay(false);
        }}
      >
        Post
      </Button>
    </Link>
  );
};

export default PostButton;
