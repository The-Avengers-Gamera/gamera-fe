import styled from 'styled-components';
import BarButton from '../BarButton';

const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

const PlatformBars = () => {
  return (
    <Container>
      <BarButton>All</BarButton>
      <BarButton>PlayStation</BarButton>
      <BarButton>Nintendo</BarButton>
      <BarButton>Xbox</BarButton>
      <BarButton>PC</BarButton>
    </Container>
  );
};

export default PlatformBars;
