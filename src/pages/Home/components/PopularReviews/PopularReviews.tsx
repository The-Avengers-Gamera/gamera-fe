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
].map((item) => ({ ...item, id: uuid() }));
const PopularReviews = () => (
  <GeneralContainer
    sx={{ padding: '0.5rem 3rem 3rem' }}
    header={<ContainerHeader title="POPULAR REVIEWS" />}
    laptop={3}
    mobile={4}
    divider
  >
    {cards.map(({ id, card }) => (
      // replace your card here
      <Card
        sx={{ height: 250 }}
        key={id}
      >
        CARD SLOT {card}
      </Card>
    ))}
  </GeneralContainer>
);
export default PopularReviews;
