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

type SelectionBarsProps = {
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
};

// this component represents the platform selection and sorting buttons under the tilte of 'All Reviews'
const SelectionBars = ({ platformSelected, setPlatformSelected }: SelectionBarsProps) => {
  return (
    <Container>
      <PlatformBars
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
      />
      <SortBars />
    </Container>
  );
};

export default SelectionBars;
