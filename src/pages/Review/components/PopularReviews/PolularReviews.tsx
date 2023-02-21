import styled from 'styled-components';
import Top5Reviews from './components/Top5Reviews';
import TopReviewCover from './components/TopReviewCover';

const Container = styled.div`
  background-color: #000000;
  height: 575px;

  padding: 95px 85px;

  position: relative;
  display: flex;
  align-items: center;

  clip-path: polygon(0% 0%, 35% 0%, 37% 5%, 63% 5%, 65% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const PopularReviews = () => {
  return (
    <Container>
      <TopReviewCover />
      <Top5Reviews />
    </Container>
  );
};

export default PopularReviews;
