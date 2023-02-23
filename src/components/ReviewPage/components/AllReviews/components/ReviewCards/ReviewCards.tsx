import { Button } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import LoadMore from './components/LoadMore';
import ReviewCard from '@/components/ReviewPage/components/AllReviews/components/ReviewCards/components/ReviewCard';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;
`;

// TODO: replace your card here or create a new Card component in a seperate tsx file
type ReviewCardType = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};

const initialState: ReviewCardType[] = [];
const mockReviewItem = {
  coverUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  daysAndOverview: '6h ago - Optimized Prime.',
  game: 'The last of Us',
  author: 'LUKE REILLY',
  commNum: '36',
  likeNum: '64',
};
for (let i = 0; i < 4; ) {
  initialState.push(structuredClone(mockReviewItem));
  mockReviewItem.title = `The Last Of Us Part Review ${i + 1}`; // mock data: make title unique
  i += 1;
}

const Card = styled.div`
  width: 100%;
  height: 170px;

  margin-bottom: 25px;
  border-bottom: 1px solid #5d5d5d;
`;

const ReviewCards = () => {
  // TODO: replace your card here
  const [reviewList] = useState(initialState);

  return (
    <Container>
      {reviewList.map(({ coverUrl, title, daysAndOverview, author, game, commNum, likeNum }) => {
        return (
          <ReviewCard
            key={title}
            coverUrl={coverUrl}
            daysAndOverview={daysAndOverview}
            author={author}
            game={game}
            commNum={commNum}
            likeNum={likeNum}
            title={title}
          />
        );
      })}

      {/* load more */}
      <LoadMore />
    </Container>
  );
};

export default ReviewCards;
