import { v4 as uuid } from 'uuid';
import { Card } from '@mui/material';
import React from 'react';
import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';

const cards = [
  { card: 1 },
  { card: 2 },
  { card: 3 },
  { card: 4 },
  { card: 5 },
  { card: 6 },
  { card: 7 },
  { card: 8 },
  { card: 9 },
  { card: 10 },
].map((item) => ({ ...item, id: uuid() }));
const MostLikes = () => (
  <GeneralContainer
    sx={{ padding: '0.5rem 3rem 3rem' }}
    header={<ContainerHeader title="MOST LIKED" />}
    laptop={4}
    mobile={6}
    divider
  >
    {cards.map(({ card, id }) => (
      // replace your card here
      <Card
        sx={{ height: 30 }}
        key={id}
      >
        CARD SLOT {card}
      </Card>
    ))}
  </GeneralContainer>
);
export default MostLikes;
