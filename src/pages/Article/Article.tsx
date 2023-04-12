import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleContent from './ArticleContent/ArticleContent';
import Comments from './Comments';
import { getArticleById } from '../../services/article';
import { IArticle } from '../../interfaces/article';
import { ArticleType } from '../../constants/article';
import { IComment } from '../../interfaces/comment';
import useToast from '../../context/notificationToast/useToast';
import { ToastType } from '@/constants/notification';

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
  likeNum: 0,
  commentNum: 0,
  coverImgUrl: '',
  commentList: [],
};

const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const articleId = Number(id);

  const [articleContent, setArticleContent] = useState<IArticle>(initArticleContent);
  const [commentList, setCommentList] = useState<IComment[]>([]);

  // useToast hook is used to show a toast notification
  const { setToastIsOpen, setToastContent } = useToast();

  useEffect(() => {
    async function fetchArticle(): Promise<void> {
      try {
        const { data: article, status } = await getArticleById(articleId);
        if (status === 200) {
          setArticleContent({ ...article });
          setCommentList(article.commentList);
        }
      } catch ({ response }) {
        // TODO: error information can be pop up
        setToastContent({
          type: ToastType.ERROR,
          message: "It seems like there's something wrong...",
          duration: 3000,
        });
        setToastIsOpen(true);

        // navigate to 404 page
        navigate('/404');
      }
    }

    if (!articleId) {
      navigate('/404');
      return;
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
