import React from 'react';
import { Box } from '@mui/material';
import Carousel from './components/Carousel';
import Guide from './components/Guide';
import Header from './components/Header';
import PopularReviews from './components/PopularReviews';
import TrendingNews from './components/TrendingNews';
import theme from '@/styles/theme';
import MostLikes from './components/MostLikes/MostLikes';
import BackedBy from './components/BackedBy/BackedBy';

const HomePage = () => (
  <>
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
  </>
);

export default HomePage;
