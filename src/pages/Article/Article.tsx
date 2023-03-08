import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mockArticle from './mockArticle';
import ArticleContent from './ArticleContent/ArticleContent';
import Comments from './Comments';
import { ICommentItem } from './comment';

const Container = styled.div`
  margin-left: 100px;
  margin-top: 110px;
  margin-right: 200px;
`;

interface ArticleContentType {
  title: string;
  subtitle: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  updateTime: string;
  postTime: string;
  mainContent: string;
  game: { id: number; name: string; cover: string };
  tagList: { id: number; name: string }[] | [];
}

interface GetArticleApiType extends ArticleContentType {
  commentList: ICommentItem[];
}

const initArticleContent: ArticleContentType = {
  title: '',
  subtitle: '',
  author: {
    id: 0,
    name: '',
    avatar: '',
  },
  updateTime: '',
  postTime: '',
  mainContent: '',
  game: { id: 0, name: '', cover: '' },
  tagList: [],
};

const Article = () => {
  const [articleContent, setArticleContent] = useState<ArticleContentType>(initArticleContent);
  const [commentList, setCommentList] = useState<ICommentItem[]>([]);

  useEffect(() => {
    const { commentList: commentListTemp, ...articleContentTemp }: GetArticleApiType = mockArticle;
    setArticleContent({ ...articleContentTemp });
    setCommentList(commentListTemp);
  }, []);

  return (
    <Container>
      <ArticleContent articleContent={articleContent} />
      <Comments commentList={commentList} />
    </Container>
  );
};

export default Article;
