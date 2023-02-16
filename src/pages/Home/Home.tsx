import React from 'react';
import Carousel from './components/Carousel';
import Guide from './components/Guide';
import Header from './components/Header';
import PopularReviews from './components/PopularReviews';
import RecentLikes from './components/RecentLikes';
import TrendingNews from './components/TrendingNews';

const HomePage = () => (
  <div>
    <Header />
    <Carousel />
    <Guide />
    <PopularReviews />
    <RecentLikes />
    <TrendingNews />
  </div>
);

export default HomePage;
