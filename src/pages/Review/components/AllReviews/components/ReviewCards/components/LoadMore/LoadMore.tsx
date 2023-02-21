import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 960px;

  margin-bottom: 25px;

  & button {
    padding: 8px 16px;
    border-radius: 8px;
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
