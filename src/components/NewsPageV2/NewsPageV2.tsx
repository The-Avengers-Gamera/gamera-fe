import React, { useState } from 'react';
import styled from 'styled-components';
import TrendingNews from './components/TrendingNews/TrendingNews';
import ArticlesShowCase from '../ArticlesShowCase';
import { IArticleCard } from '@/interfaces/article';
import { EArticleType } from '@/constants/article';

// ! mock data -------------------------------------------------------------------------------------------
const mockNewsItem: IArticleCard = {
  coverImgUrl:
    'https://assets-prd.ignimgs.com/2023/01/29/marioblog-1675028054393.png?crop=16%3A9&width=282&dpr=2',
  title: "The Super Mario Bros. Movie's Latest Commercial Is an Ad for Super Mario Bros. Plumbing",
  date: '1d ago',
  description:
    "It's also an homage to the classic intro song from live-action The Super Mario Bros. Super Show!",
  author: { name: 'Luke Reilly' },
  likeCount: 64,
  commentCount: 36,
};

const mockNewsItemWithGame: IArticleCard = {
  coverImgUrl:
    'https://assets-prd.ignimgs.com/2022/02/27/startersblog-1645989937899.jpg?crop=16%3A9&width=282&dpr=2',
  title: "Nintendo Reveals Changes Coming in Pokémon Scarlet and Violet's February Update",
  date: '1d ago',
  description: 'The games launched with several performance issues.',
  author: { name: 'Ryan Dinsdale' },
  likeCount: 64,
  commentCount: 36,
  game: {
    id: '001',
    name: 'POKEMON SCARLET',
  },
};

const initialState = [
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItemWithGame,
];
// ! ---------------------------------------------------------------------------------------------

const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

// NewsPageV2 component ======================================================================
const NewsPageV2 = () => {
  // hooks and states -------------------
  const articleType = EArticleType.NEWS; // which is used to differentiate review page and news page
  const [platformSelected, setPlatformSelected] = useState('All');
  const [selectedPlatformArticleList, setSelectedPlatformArticleList] = useState(initialState);
  // functions --------------------------

  // jsx --------------------------------
  return (
    <PageContainer>
      <TrendingNews />
      {/* employ reusable component ArticleShowCase instead */}
      {/* <LatestNews /> */}
      <ArticlesShowCase
        articleType={articleType}
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
        selectedPlatformArticleList={selectedPlatformArticleList}
        setSelectedPlatformArticleList={setSelectedPlatformArticleList}
      />
    </PageContainer>
  );
};

export default NewsPageV2;
