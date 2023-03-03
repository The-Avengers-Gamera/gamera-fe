import React, { useState } from 'react';
import TrendingNews from './TrendingNews/TrendingNews';
import ArticlesShowCase from '../Reusable_Components/ArticlesShowCase';

// ! FIXME: mock data mimicing axios request ------------------------------------------------------------
type ReviewCardType = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};
const initialState: ReviewCardType[] = [];
// ! --------------------------------------------------------------------------------------------------
interface LatestNews {
  coverUrl: string;
  title: string;
  date: string;
  subtitle: string;
  author: string;
  likeCount: number;
  commentCount: number;
}

const mockNewsItem = {
  coverUrl:
    'https://assets-prd.ignimgs.com/2023/01/29/marioblog-1675028054393.png?crop=16%3A9&width=282&dpr=2',
  title: "The Super Mario Bros. Movie's Latest Commercial Is an Ad for Super Mario Bros. Plumbing",
  date: '1d ago',
  subtitle:
    "It's also an homage to the classic intro song from live-action The Super Mario Bros. Super Show!",
  author: 'Luke Reilly',
  likeCount: 64,
  commentCount: 36,
};

const mockNewsItemWithGame = {
  coverUrl:
    'https://assets-prd.ignimgs.com/2022/02/27/startersblog-1645989937899.jpg?crop=16%3A9&width=282&dpr=2',
  title: "Nintendo Reveals Changes Coming in Pokémon Scarlet and Violet's February Update",
  date: '1d ago',
  subtitle: 'The games launched with several performance issues.',
  author: 'Ryan Dinsdale',
  likeCount: 64,
  commentCount: 36,
  game: {
    id: '001',
    name: 'POKEMON SCARLET',
  },
};

const mockNewsList = [
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItemWithGame,
  mockNewsItem,
  mockNewsItem,
];

const NewsPage = () => {
  // hooks and states -------------------
  const articleType = 'News'; // which is used to differentiate review page and news page
  const [platformSelected, setPlatformSelected] = useState('PS');
  const [selectedPlatformArticleList, setSelectedPlatformArticleList] = useState(initialState);
  // functions --------------------------

  // jsx --------------------------------
  return (
    <div>
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
    </div>
  );
};

export default NewsPage;
