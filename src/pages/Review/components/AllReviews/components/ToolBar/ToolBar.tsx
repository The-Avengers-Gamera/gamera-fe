import { useState } from 'react';

import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from './components/SortBars';

const Container = styled.div`
  // border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

// this component represents the platform selection and sorting buttons under the tilte of 'All Reviews'
const ToolBar = () => {
  /* TODO: should employ state: currentPlatform to light up the button when click on it for a dynamic web page, instead of :hover when click on a button */
  const [currentPlatform, setCurrentPlatform] = useState<string>('all');

  return (
    <Container>
      <PlatformBars
        currentPlatform={currentPlatform}
        setCurrentPlatform={setCurrentPlatform}
      />
      <SortBars />
    </Container>
  );
};

export default ToolBar;
