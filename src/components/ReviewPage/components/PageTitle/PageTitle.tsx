import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  height: 100px;

  & h2 {
    font-family: Gen Jyuu Gothic Monospace;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0em;
  }
`;

const PageTitle = () => {
  return (
    <Container>
      <h2>Reviews</h2>
    </Container>
  );
};

export default PageTitle;
