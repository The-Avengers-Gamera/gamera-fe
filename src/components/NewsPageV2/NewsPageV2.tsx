import styled from 'styled-components';
import TrendingNews from './components/TrendingNews/TrendingNews';
import ArticlesShowCase from '../ArticlesShowCase';
import { ArticleType } from '@/constants/article';

const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

const NewsPageV2 = () => (
  <PageContainer>
    <TrendingNews />
    <ArticlesShowCase articleType={ArticleType.NEWS} />
  </PageContainer>
);

export default NewsPageV2;
