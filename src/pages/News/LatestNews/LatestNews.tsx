import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import LatestNewsItem from './LatestNewsItem';
import PlatformSelectionBar from './PlatformSelectionBar';

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

const OuterContainer = styled.div`
  margin-top: 50px;
  margin-left: 85px;
  width: 1000px;

  .title {
    font-size: 30px;
  }

  .news-list {
    margin-top: 10px;
  }

  .load-more-btn-container {
    display: flex;
  }
`;

const LoadMoreButton = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 7px;
    color: #3d3d3d;

    padding: 10px 20px;
    margin: 30px auto;
    width: 130px;
    font-weight: bold;
    &:hover {
      background-color: #70e702;
    }
  }
`;

interface LatestNews {
  coverUrl: string;
  title: string;
  date: string;
  subtitle: string;
  author: string;
  likeCount: number;
  commentCount: number;
}

const LatestNews = () => {
  const [latestNewsList, setLatestNewsList] = useState<LatestNews[]>([]);

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;

      setLatestNewsList(mockNewsList);
    }
  }, []);

  const loadMoreNews = () => {
    // TODO: add the loading effect
    const temp = [];
    temp.push(mockNewsItem);
    temp.push(mockNewsItem);
    temp.push(mockNewsItem);
    temp.push(mockNewsItem);
    temp.push(mockNewsItem);
    setLatestNewsList([...latestNewsList, ...temp]);
  };

  return (
    <OuterContainer>
      <h2 className="title">Latest News</h2>
      <PlatformSelectionBar />
      <ul className="news-list">
        {latestNewsList.map((news) => (
          <LatestNewsItem news={news} />
        ))}
      </ul>
      <div className="load-more-btn-container">
        <LoadMoreButton
          onClick={() => {
            loadMoreNews();
          }}
        >
          Load more
        </LoadMoreButton>
      </div>
    </OuterContainer>
  );
};

export default LatestNews;
