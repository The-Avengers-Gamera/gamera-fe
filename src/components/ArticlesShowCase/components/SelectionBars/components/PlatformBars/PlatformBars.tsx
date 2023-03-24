import styled from 'styled-components';
import SelectionButton from '../../../../../Shares/SelectionButton';
import { PLATFORMS } from '@/constants/platforms';

const Container = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

interface PlatformBarsProps {
  platformSelected: Platform;
  setPlatformSelected: React.Dispatch<React.SetStateAction<Platform>>;
}

const PlatformBars = ({ platformSelected, setPlatformSelected }: PlatformBarsProps) => {
  // hooks and states

  // function

  // jsx
  return (
    <Container>
      {PLATFORMS.map((platform) => {
        return (
          <SelectionButton
            key={platform}
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
