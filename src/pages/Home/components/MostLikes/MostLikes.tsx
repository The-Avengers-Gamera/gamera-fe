import { v4 as uuid } from 'uuid';
import { Card } from '@mui/material';
import React from 'react';
import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';
import LikeCard from '../MostLikes/MostLikesCom/LikeCard';

const cards = ['card', 'card', 'card', 'card', 'card', 'card'];
const MostLikes = () => (
  <GeneralContainer
    sx={{ padding: '0.5rem 3rem 3rem' }}
    header={<ContainerHeader title="MOST LIKED" />}
    padding={3}
    laptop={4}
    mobile={6}
  >
    <LikeCard />
    {cards.map((card) => (
      <Card key={uuid()}>CARD SLOT {card}</Card>
    ))}
  </GeneralContainer>
);
export default MostLikes;
