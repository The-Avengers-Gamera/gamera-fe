import styled from 'styled-components';
import SelectionButton from '../../../../../Shares/SelectionButton';
import { Platform } from '@/constants/article';

const Container = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-top: 5px;
  @media screen and (max-width: 568px) {
    display: flex;
    margin-bottom: 5px;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
  }
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
