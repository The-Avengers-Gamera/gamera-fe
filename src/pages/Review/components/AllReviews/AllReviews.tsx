import styled from 'styled-components';
import ReviewCards from './components/ReviewCards';
import ToolBar from './components/ToolBar';

const Container = styled.div`
  // border: 1px solid #fff;

  padding: 45px 84px 0%;

  & h2 {
    font-family: Gen Jyuu Gothic Monospace;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0em;
  }
`;

const AllReviews = () => {
  return (
    <Container>
      <h2>All Reveiws</h2>
      <ToolBar />
      <ReviewCards />
    </Container>
  );
};

export default AllReviews;
