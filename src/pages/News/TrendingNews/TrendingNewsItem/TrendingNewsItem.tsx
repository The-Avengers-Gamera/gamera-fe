import React from 'react';

interface Props {
  news: {
    title: string;
    commentCount: number;
    likeCount: number;
  };
}

const TrendingNewsItem = ({ news }: Props) => {
  return (
    <div>
      <div>{news.title}</div>
      <div>
        <span>{news.commentCount}</span>
        <span>{news.likeCount}</span>
      </div>
    </div>
  );
};

export default TrendingNewsItem;
