import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';

import style from './index.module.css';
import HomeNewsCard from './HomeNewsCard/HomeNewsCard';
import { titleFont } from '../../utils/useFont';

const cards = [1, 2, 3, 4, 5, 6];
const TrendingNews = () => (
  <div className={style.abc}>
    <GeneralContainer
      divider={false}
      header={
        <Box
          sx={{ bgcolor: theme.color.bg_primary }}
          className={style.title}
        >
          <Typography sx={titleFont}>TRENDING NEWS</Typography>
        </Box>
      }
      sx={{ padding: '2rem 3rem 3rem' }}
      laptop={3.7}
      mobile={5.7}
      rowGapPx="30px"
    >
      {cards.map((card) => (
        <HomeNewsCard key={card} />
      ))}
    </GeneralContainer>
  </div>
);
export default TrendingNews;
