import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';
import style from './index.module.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TrendingNews = () => (
  <GeneralContainer
    header={
      <Box sx={{ bgcolor: theme.color.bg_light }} className={style.title}>
        <Typography>TRENDING NEWS</Typography>
      </Box>
    }
    sx={{ padding: '2rem' }}
    laptop={4}
    mobile={6}
  >
    {cards.map((card) => (
      // replace your card here
      <Card>CARD SLOT {card}</Card>
    ))}
  </GeneralContainer>
);
export default TrendingNews;
