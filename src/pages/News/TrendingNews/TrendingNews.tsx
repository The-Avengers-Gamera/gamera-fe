import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import TrendingNewsFirstItem from './TrendingNewsFirstItem/TrendingNewsFirstItem';
import TrendingNewsItem from './TrendingNewsItem/TrendingNewsItem';

const OuterContainer = styled.div`
  position: relative;
`;

const TrendingNewsTitle = styled.p`
  position: absolute;
  left: 50%;
  top: -25px;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const NewsContainer = styled.div`
  /* position: relative; */
  margin-top: 110px;
  background-color: #000000;
  clip-path: polygon(
    0 0,
    35.7% 0,
    calc(35.7% + 20px) 20px,
    calc(100% - 35.7% - 20px) 20px,
    calc(100% - 35.7%) 0,
    100% 0,
    100% 100%,
    0 100%
  );
`;

interface TrendingNewsList {
  coverUrl: string;
  title: string;
  commentCount: number;
  likeCount: number;
}

const TrendingNews = () => {
  const [trendingNews, setTrendingNews] = useState<TrendingNewsList[]>([]);

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      setTrendingNews([
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
        {
          coverUrl:
            'https://assets-prd.ignimgs.com/2023/02/20/legend-of-zelda-tears-of-the-kingdom-1663081213439-1675804568959-1676863480057.jpg?fit=crop&width=282&height=282&dpr=2',
          title:
            'PSA: The Legend of Zelda: Tears of the Kingdom Art Book Has Seemingly Leaked Online',
          commentCount: 17,
          likeCount: 100,
        },
      ]);
    }
  }, []);

  return (
    <OuterContainer>
      <TrendingNewsTitle>
        <TrendingUpIcon fontSize="large" />
        <span>Trending News</span>
      </TrendingNewsTitle>

      <NewsContainer>
        <TrendingNewsFirstItem news={trendingNews[0]} />
        {trendingNews.slice(1).map((item) => (
          <TrendingNewsItem news={item} />
        ))}
      </NewsContainer>
    </OuterContainer>
  );
};

export default TrendingNews;
