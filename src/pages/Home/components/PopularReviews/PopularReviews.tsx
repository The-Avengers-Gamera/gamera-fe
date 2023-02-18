// import { Card } from '@mui/material';
// import React from 'react';
import { useState } from 'react';

import ReviewCard from './components/ReviewCard';

import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';

// const cards = [1, 2, 3, 4, 5, 6, 7];

// mock data sent from backend ------------------------------------------------------------
type ReviewItemType = {
  imgUrl: string;
  title: string;
  authorName: string;
  publishTime: string;
};

// const initialState: ReviewItemType[] = [];
const initialState: ReviewItemType[] = [];

const mockReviewItem = {
  imgUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  authorName: 'LUKE REILLY',
  publishTime: '1 day ago',
};
for (let i = 0; i < 8; ) {
  initialState.push(structuredClone(mockReviewItem));
  mockReviewItem.title = `The Last Of Us Part 1 Review ${i}`; // mock data: make title unique
  i += 1;
}

// ------------------------------------------------------------------------------------------

const PopularReviews = () => {
  const [reviewList] = useState(initialState);

  return (
    <GeneralContainer
      sx={{ padding: '0.5rem 3rem 3rem' }}
      header={<ContainerHeader title="POPULAR REVIEWS" />}
      laptop={3}
      mobile={4}
      divider
    >
      {/* {cards.map((card) => (
      // replace your card here
      <Card
        sx={{ height: 250 }}
        key={card}
      >
        CARD SLOT {card}
      </Card>
    ))} */}

      {/* TODO: replace initialState below with reviewList, which is a state */}
      {reviewList.map((review) => {
        return (
          <ReviewCard
            key={`${review.title}`}
            coverUrl={review.imgUrl}
            title={review.title}
            authorName={review.authorName}
            publishTime={review.publishTime}
          />
        );
      })}
    </GeneralContainer>
  );
};
export default PopularReviews;
