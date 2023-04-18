import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  padding-bottom: 25px;
  & button {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.color.primary};
    color: #3d3d3d; // TODO: manage the color using theme instead
    cursor: pointer;
  }
`;

type LoadMoreProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setIsAtTheEnd: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  totalPages: number;
};

const LoadMore = ({ setCurrentPage, currentPage, totalPages, setIsAtTheEnd }: LoadMoreProps) => {
  const changePage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
      return;
    }
    setIsAtTheEnd(true);
  };
  return (
    <Container>
      <button
        type="button"
        onClick={changePage}
      >
        Load more
      </button>
    </Container>
  );
};

export default LoadMore;
