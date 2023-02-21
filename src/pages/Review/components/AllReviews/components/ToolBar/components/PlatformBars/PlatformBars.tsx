import { Button } from '@mui/material';
import styled from 'styled-components';
import BarButton from '../BarButton';

const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

const PlatformButton = styled(BarButton)`
  width: 150px;
`;

const PlatformBars = () => {
  return (
    <Container>
      <PlatformButton>All</PlatformButton>
      <PlatformButton>PlayStation</PlatformButton>
      <PlatformButton>Nintendo</PlatformButton>
      <PlatformButton>Xbox</PlatformButton>
      <PlatformButton>PC</PlatformButton>
    </Container>
  );
};

export default PlatformBars;
