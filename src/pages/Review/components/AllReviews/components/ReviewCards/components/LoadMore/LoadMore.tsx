import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 960px;

  padding-bottom: 25px;

  & button {
    padding: 8px 16px;
    border-radius: 8px;

    border: none;

    background-color: ${({ theme }) => theme.color.main};
    color: #3d3d3d; // TODO: manage the color using theme instead
  }
`;

const LoadMore = () => {
  return (
    <Container>
      <button type="button">Load more</button>
    </Container>
  );
};

export default LoadMore;
