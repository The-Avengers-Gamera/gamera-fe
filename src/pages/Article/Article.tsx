import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mockArticle from './mockArticle';
import ArticleContent from './ArticleContent/ArticleContent';
import Comments from './Comments';

const Container = styled.div`
  margin-left: 100px;
  margin-top: 110px;
  margin-right: 200px;
`;

interface CommentType {
  author: {
    id: number;
    avatar: string;
    username: string;
  };
  postTime: string;
  like: number;
  content: string;
  childCommentList: CommentType[] | [];
}

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
  gameList: { id: number; name: string; cover: string }[] | [];
  tagList: { id: number; name: string }[] | [];
}

interface GetArticleApiType extends ArticleContentType {
  commentList: CommentType[];
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
  gameList: [],
  tagList: [],
};

const Article = () => {
  const [articleContent, setArticleContent] = useState<ArticleContentType>(initArticleContent);
  const [commentList, setCommentList] = useState<CommentType[]>([]);

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