import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';

import style from './index.module.css';
import HomeNewsCard from './HomeNewsCard/HomeNewsCard';

const cards = [1, 2, 3, 4, 5, 6];
const TrendingNews = () => (
  <GeneralContainer
    divider={false}
    header={
      <Box
        sx={{ bgcolor: theme.color.bg_primary }}
        className={style.title}
      >
        <Typography>TRENDING NEWS</Typography>
      </Box>
    }
    sx={{ padding: '2rem' }}
    laptop={4}
    mobile={6}
  >
    {cards.map((card) => (
      <HomeNewsCard key={card} />
    ))}
  </GeneralContainer>
);
export default TrendingNews;
