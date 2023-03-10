import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AllReviews from './components/AllReviews';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';

// css----------------------------------------------------
const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

// this component represents the review page
const ReviewPage = () => {
  const { id } = useParams();
  // return <div>ReviewPage with id: {id}</div>;
  return (
    <PageContainer>
      <PageTitle />
      <PopularReviews />
      <AllReviews />
    </PageContainer>
  );
};

export default ReviewPage;
