import { Card } from '@mui/material';
import React from 'react';

import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';

const cards = [1, 2, 3, 4, 5, 6, 7];
const PopularReviews = () => (
  <GeneralContainer
    sx={{ padding: '0.5rem 3rem 3rem' }}
    header={<ContainerHeader title="POPULAR REVIEWS" />}
    laptop={3}
    mobile={4}
    divider
  >
    {cards.map((card) => (
      // replace your card here
      <Card
        sx={{ height: 250 }}
        key={card}
      >
        CARD SLOT {card}
      </Card>
    ))}
  </GeneralContainer>
);
export default PopularReviews;
