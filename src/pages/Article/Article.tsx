import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArticleContent from './ArticleContent/ArticleContent';
import Comments from './Comments';
import { getArticleById } from '../../services/article';
import { IArticle } from '../../interfaces/article';
import { ArticleType } from '../../constants/article';
import { IComment } from '../../interfaces/comment';

const Container = styled.div`
  margin-left: 100px;
  margin-top: 110px;
  margin-right: 200px;
`;

const initArticleContent: IArticle = {
  id: 0,
  type: ArticleType.NEWS,
  title: '',
  updatedTime: '',
  createdTime: '',
  text: '',
  tagList: [],
  coverImgUrl: '',
  commentList: [],
};

const Article = () => {
  const [articleContent, setArticleContent] = useState<IArticle>(initArticleContent);
  const [commentList, setCommentList] = useState<IComment[]>([]);

  useEffect(() => {
    async function fetchArticle(): Promise<void> {
      const articleId = 3;
      try {
        const response = await getArticleById(articleId);
        if (response.status === 200) {
          const article = response.data;
          setArticleContent({ ...article });
          setCommentList(article.commentList);
        }
      } catch ({ response }) {
        // TODO: error information can be pop up
      }
    }
    fetchArticle();
  }, []);

  return (
    <Container>
      <ArticleContent articleContent={articleContent} />
      <Comments
        commentList={commentList}
        setCommentList={setCommentList}
        articleId={articleContent.id}
      />
    </Container>
  );
};

export default Article;
