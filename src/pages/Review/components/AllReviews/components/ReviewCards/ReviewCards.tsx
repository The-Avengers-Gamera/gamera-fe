import { Button } from '@mui/material';
import styled from 'styled-components';
import LoadMore from './components/LoadMore';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;
`;

// TODO: replace your card here or create a new Card component in a seperate tsx file
const Card = styled.div`
  width: 100%;
  height: 170px;

  margin-bottom: 25px;
  border-bottom: 1px solid #5d5d5d;
`;

const ReviewCards = () => {
  // TODO: replace your card here
  return (
    <Container>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>

      {/* load more */}
      <LoadMore />
    </Container>
  );
};

export default ReviewCards;
