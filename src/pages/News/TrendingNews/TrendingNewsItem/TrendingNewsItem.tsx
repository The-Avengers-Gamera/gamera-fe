import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 313px;
  flex-shrink: 0;

  .title {
    margin-top: 15px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .comment-like {
    display: flex;
    justify-content: space-between;
  }
`;

interface Props {
  news: {
    title: string;
    commentCount: number;
    likeCount: number;
  };
  order: string;
}

const TrendingNewsItem = ({ news, order }: Props) => {
  return (
    <Card>
      <div>{order}</div>
      <div className="title">{news.title}</div>
      <div className="comment-like">
        <span>{news.commentCount}</span>
        <span>{news.likeCount}</span>
      </div>
    </Card>
  );
};

export default TrendingNewsItem;
