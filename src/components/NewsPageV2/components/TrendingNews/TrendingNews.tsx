import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Skeleton from '@mui/material/Skeleton';
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 40px;
  margin-bottom: 20px;
  width: 1800px;
  height: auto;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: s;
  width: 1200px;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  flex: 33%;
  margin-bottom: 20px;
  height: 90px;
`;

const inLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SmallNews = () => {
  return (
    <TextContainer>
      <Skeleton
        variant="rectangular"
        width={20}
        height={15}
      />
      <Skeleton
        variant="rectangular"
        width={280}
        height={15}
      />
      <Skeleton
        variant="rectangular"
        width={200}
        height={15}
      />
    </TextContainer>
  );
};

const Loading = () => {
  return (
    <Container>
      <Skeleton
        variant="rectangular"
        width={350}
        height={370}
      />
      <SubContainer>
        {inLoading.map((index) => (
          <SmallNews key={index} />
        ))}
      </SubContainer>
    </Container>
  );
};

const TrendingNews = () => {
  const [trendingNews, setTrendingNews] = useState<IArticle[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      getNews()
        .then(({ data: newsList }) => {
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
          {isLoading && <Loading />}
          {isError && <div>load failed</div>}
          {trendingNews && (
            <>
              <Link to={`/article/${trendingNews[0].id}`}>
                <TrendingNewsFirstItem news={trendingNews[0]} />
              </Link>
              <ul className="trending-news-item-container">
                {trendingNews.slice(1).map((item, index) => (
                  <Link
                    to={`/article/${item.id}`}
                    key={item.id}
                  >
                    <TrendingNewsItem
                      news={item}
                      order={index + 2 === 10 ? `10` : `0${index + 2}`}
                    />
                  </Link>
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
