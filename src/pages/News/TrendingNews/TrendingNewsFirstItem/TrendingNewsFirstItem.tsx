import React from 'react';

interface Props {
  news: {
    coverUrl: string;
    title: string;
  };
}

const TrendingNewsFirstItem = ({ news }: Props) => {
  return (
    <div>
      <img
        src={news?.coverUrl}
        alt="news cover"
        srcSet=""
      />
      <p>{news?.title}</p>
    </div>
  );
};

export default TrendingNewsFirstItem;
