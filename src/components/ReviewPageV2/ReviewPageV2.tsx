import styled from 'styled-components';
import ArticlesShowCase from '../ArticlesShowCase';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';
import { ArticleType } from '@/constants/article';

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

const ReviewPageV2 = () => (
  <PageContainer>
    <PageTitle />
    <PopularReviews />
    <ArticlesShowCase articleType={ArticleType.REVIEWS} />
  </PageContainer>
);

export default ReviewPageV2;
