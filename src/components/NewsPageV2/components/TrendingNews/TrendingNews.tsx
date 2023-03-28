import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import TrendingNewsFirstItem from './TrendingNewsFirstItem/TrendingNewsFirstItem';
import TrendingNewsItem from './TrendingNewsItem/TrendingNewsItem';
import { getNews } from '@/services/article';
import { IArticle } from '@/interfaces/article';

const OuterContainer = styled.div`
  position: relative;
`;

const TrendingNewsTitle = styled.p`
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: bold;
  font-family: 'Alumni Sans';
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }

  .icon {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const NewsContainer = styled.div`
  /* position: relative; */
  margin-top: 110px;
  padding-top: 130px;
  background-color: #000000;
  height: 575px;
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
  display: flex;

  .trending-news-item-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 30px;
    height: 370px;
  }
`;

const TrendingNews = () => {
  const [trendingNews, setTrendingNews] = useState<IArticle[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      getNews()
        .then((res) => {
          const newsList = res.data;
          setTrendingNews(newsList.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, []);

  return (
    <OuterContainer>
      <TrendingNewsTitle>
        <TrendingUpIcon
          fontSize="large"
          className="icon"
        />
        <span>TRENDING NEWS</span>
      </TrendingNewsTitle>
      <NewsContainer>
        <>
          {isLoading && <div>loading...</div>}
          {isError && <div>load failed</div>}
          {trendingNews && (
            <>
              <TrendingNewsFirstItem news={trendingNews[0]} />
              <ul className="trending-news-item-container">
                {trendingNews.slice(1).map((item, index) => (
                  <TrendingNewsItem
                    key={item.id}
                    news={item}
                    order={index + 2 === 10 ? `10` : `0${index + 2}`}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      </NewsContainer>
    </OuterContainer>
  );
};

export default TrendingNews;
