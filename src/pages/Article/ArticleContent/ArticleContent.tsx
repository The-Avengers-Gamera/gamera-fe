import React from 'react';

interface Props {
  articleContent: {
    title: string;
    subtitle: string;
    author: {
      id: number;
      name: string;
      avatar: string;
    };
    updateTime: string;
    postTime: string;
    gameList: { id: number; name: string; cover: string }[] | [];
    tagList: { id: number; name: string }[] | [];
  };
}

const ArticleContent = ({ articleContent }: Props) => {
  return <div>ArticleContent</div>;
};

export default ArticleContent;
