import { Button } from '@mui/material';
import styled from 'styled-components';
import SelectionButton from '../SelectionButton';

const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

interface PlatformBarsProps {
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
}

const PlatformBars = ({ platformSelected, setPlatformSelected }: PlatformBarsProps) => {
  // hooks and states
  const Platforms = ['All', 'PlayStation', 'Nintendo', 'Xbox', 'PC'];
  // function

  // jsx
  return (
    <Container>
      {Platforms.map((platform) => {
        return (
          <SelectionButton
            platformSelected={platformSelected}
            setPlatformSelected={setPlatformSelected}
            platformName={platform}
          />
        );
      })}
    </Container>
  );
};

export default PlatformBars;
