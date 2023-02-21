import { useState } from 'react';

import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from './components/SortBars';

const Container = styled.div`
  border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

const ToolBar = () => {
  const [currentPlatform, setCurrentPlatform] = useState<string>('all');

  return (
    <Container>
      {/* should employ state, instead of :hover when click on a button */}
      <PlatformBars
        currentPlatform={currentPlatform}
        setCurrentPlatform={setCurrentPlatform}
      />
      <SortBars />
    </Container>
  );
};

export default ToolBar;
