import { Button } from '@mui/material';
import styled from 'styled-components';
import BarButton from '../BarButton';

const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

interface Props {
  currentPlatform: string;
  setCurrentPlatform: React.Dispatch<React.SetStateAction<string>>;
}

const PlatformBars = ({ currentPlatform, setCurrentPlatform }: Props) => {
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
