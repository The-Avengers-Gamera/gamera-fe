import styled from 'styled-components';
import ArticlesShowCase from '../ArticlesShowCase';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';
import { EArticleType } from '@/constants/article';

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

const articleType = EArticleType.REVIEW;

const ReviewPageV2 = () => {
  return (
    <PageContainer>
      <PageTitle />
      <PopularReviews filteredReview={undefined} />
      <ArticlesShowCase articleType={articleType} />
    </PageContainer>
  );
};

export default ReviewPageV2;
