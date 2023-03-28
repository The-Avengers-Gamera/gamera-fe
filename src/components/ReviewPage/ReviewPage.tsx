import styled from 'styled-components';
import AllReviews from './components/AllReviews';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

const ReviewPage = () => {
  return (
    <PageContainer>
      <PageTitle />
      <PopularReviews />
      <AllReviews />
    </PageContainer>
  );
};

export default ReviewPage;
