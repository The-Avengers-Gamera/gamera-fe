import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  height: 100px;

  text-transform: capitalize;
  font-size: 28px;
  font-weight: 800;
`;

const PageTitle = () => {
  return (
    <Container>
      <h2>Reviews</h2>
    </Container>
  );
};

export default PageTitle;
