import React, { useState, useEffect } from 'react';
import mockArticle from './mockArticle';
import ArticleContent from './ArticleContent/ArticleContent';
import Comments from './Comments';

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
  gameList: [],
  tagList: [],
};

const Article = () => {
  const [articleContent, setArticleContent] = useState<ArticleContentType>(initArticleContent);
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  useEffect(() => {
    const { commentList: commentListTemp, ...articleContentTemp } = mockArticle;
    setArticleContent({ ...articleContentTemp });
    setCommentList(commentListTemp);
  }, []);

  return (
    <div>
      <ArticleContent articleContent={articleContent} />
      <Comments commentList={commentList} />
    </div>
  );
};

export default Article;
