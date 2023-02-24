import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const OuterContainer = styled.div`
  display: flex;
  margin-left: 135px;
  margin-top: 25px;
`;

const CustomButton = styled(Button)`
  && {
    background-color: #222430;
    border-radius: 7px;
    color: white;
    padding: 10px 20px;
    margin: 0 10px;
    width: 130px;
    font-weight: bold;
    &:hover {
      background-color: #333646;
    }
    &.active {
      background-color: ${({ theme }) => theme.color.primary};
      color: #3d3d3d;
    }
  }
`;

const PlatformSelectionBar = () => {
  const [platformsList, setPlatformsList] = useState(['All']);
  const [activePlatform, setActivePlatform] = useState({ platform: 'All', index: 0 });

  useEffect(() => {
    setPlatformsList(['All', 'PlayStation', 'Nintendo', 'Xbox', 'PC']);
  }, []);

  return (
    <OuterContainer>
      {platformsList.map((platform, index) => (
        <CustomButton
          className={activePlatform.platform === platform ? 'active' : ''}
          onClick={() => setActivePlatform({ platform, index })}
        >
          {platform}
        </CustomButton>
      ))}
    </OuterContainer>
  );
};

export default PlatformSelectionBar;
