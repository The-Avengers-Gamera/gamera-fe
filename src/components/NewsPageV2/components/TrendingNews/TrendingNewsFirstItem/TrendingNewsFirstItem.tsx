import React from 'react';
import styled from 'styled-components';
import { TrendingNewsList } from '@/interfaces/TrendingNewsList';

const Container = styled.div`
  position: relative;
  width: 350px;
  min-width: 350px;
  height: 370px;
  margin: 0 20px 0;
  cursor: pointer;

  &:hover {
    .news-title-background {
      background-color: rgba(22, 24, 30, 0.8);
      .news-title-text {
        text-decoration: underline;
      }
    }
  }

  .order {
    position: absolute;
    top: 15px;
    left: 15px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.color.primary};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .news-title-background {
    position: absolute;
    bottom: 0;
    background-color: rgba(22, 24, 30, 0.7);
    padding: 0 20px;
    height: 80px;
    transition: 0.5s;
  }
  .news-title-text {
    margin-top: 15px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

interface Props {
  news: TrendingNewsList;
}

const TrendingNewsFirstItem = ({ news }: Props) => {
  return (
    <Container>
      <span className="order">01</span>
      <img
        src={news?.coverImgUrl}
        alt="news cover"
        srcSet=""
      />
      <div className="news-title-background">
        <p className="news-title-text">{news?.title}</p>
      </div>
    </Container>
  );
};

export default TrendingNewsFirstItem;
