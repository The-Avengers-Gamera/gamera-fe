import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 350px;
  min-width: 350px;
  height: 370px;
  margin: 60px 20px 0;

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
  news: {
    coverUrl: string;
    title: string;
  };
}

const TrendingNewsFirstItem = ({ news }: Props) => {
  return (
    <Container>
      <img
        src={news?.coverUrl}
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
