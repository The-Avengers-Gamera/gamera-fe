import { v4 as uuid } from 'uuid';
import { Card } from '@mui/material';
import React from 'react';
import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MostLikes = () => (
  <GeneralContainer
    sx={{ padding: '0.5rem 3rem 3rem' }}
    header={<ContainerHeader title="MOST LIKED" />}
    laptop={4}
    mobile={6}
    divider
  >
    {cards.map((card) => (
      // replace your card here
      <Card
        sx={{ height: 30 }}
        key={uuid()}
      >
        CARD SLOT {card}
      </Card>
    ))}
  </GeneralContainer>
);
export default MostLikes;
