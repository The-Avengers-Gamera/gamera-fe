import React, { useEffect, useRef, useState } from 'react';
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

const mockNewsList = [
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
  mockNewsItem,
];

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

  return (
    <div>
      <h2>Latest News</h2>
      <PlatformSelectionBar />
      <ul>
        {latestNewsList.map((item) => (
          <LatestNewsItem />
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;
