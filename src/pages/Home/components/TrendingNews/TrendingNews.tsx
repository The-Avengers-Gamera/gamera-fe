import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { v4 as uuid } from 'uuid';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';

import style from './index.module.css';

const cards = [{ card: 1 }, { card: 2 }, { card: 3 }, { card: 4 }, { card: 5 }, { card: 6 }].map(
  (item) => ({ ...item, id: uuid() })
);
const TrendingNews = () => (
  <GeneralContainer
    divider={false}
    header={
      <Box
        sx={{ bgcolor: theme.color.bg_light }}
        className={style.title}
      >
        <Typography>TRENDING NEWS</Typography>
      </Box>
    }
    sx={{ padding: '2rem' }}
    laptop={4}
    mobile={6}
  >
    {cards.map(({ card, id }) => (
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
export default TrendingNews;
