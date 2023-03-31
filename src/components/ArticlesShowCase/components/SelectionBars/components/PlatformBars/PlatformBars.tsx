import styled from 'styled-components';
import SelectionButton from '../../../../../Shares/SelectionButton';
import { Platform } from '@/constants/article';

const Container = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-top: 5px;
`;

interface PlatformBarsProps {
  platformSelected: Platform;
  onPlatformSelected: (platform: Platform) => void;
}

const PlatformBars = ({ platformSelected, onPlatformSelected }: PlatformBarsProps) => {
  return (
    <Container>
      {Object.values(Platform).map((platform: Platform) => {
        return (
          <SelectionButton
            key={platform}
            platformSelected={platformSelected}
            onPlatformChange={onPlatformSelected}
            currentPlatform={platform}
          />
        );
      })}
    </Container>
  );
};

export default PlatformBars;
