import React from 'react';
import { Box } from '@mui/material';
import Carousel from './components/Carousel';
import Guide from './components/Guide';
import PopularReviews from './components/PopularReviews';
import TrendingNews from './components/TrendingNews';
import theme from '@/styles/theme';
import MostLikes from './components/MostLikes/MostLikes';
import BackedBy from './components/BackedBy/BackedBy';
import Header from './components/Header';
import { otherFont } from './utils/useFont';

const HomePage = () => (
  <Box sx={{ minWidth: '768px', ...otherFont }}>
    <Box sx={{ bgcolor: theme.color.bg_primary }}>
      <Header />
      <Carousel />
      <Guide />
    </Box>

    <TrendingNews />

    <Box sx={{ bgcolor: theme.color.bg_primary }}>
      <PopularReviews />
      <MostLikes />
      <BackedBy />
    </Box>
  </Box>
);

export default HomePage;
