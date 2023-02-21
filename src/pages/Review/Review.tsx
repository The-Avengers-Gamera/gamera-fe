import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AllReviews from './components/AllReviews';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';

// css----------------------------------------------------
const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: grey;
  // height: 500px;
`;

// component --------------------------------------------------
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
