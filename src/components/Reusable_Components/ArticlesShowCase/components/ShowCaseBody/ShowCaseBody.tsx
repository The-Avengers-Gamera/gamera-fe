import { Button } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import ReviewCard from '@/components/ReviewPage/components/AllReviews/components/ReviewCards/components/ReviewCard';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;

  & .loadMore-container {
    display: flex;
    justify-content: center;

    width: 960px;

    padding-bottom: 25px;

    & .loadMore-btn {
      width: 130px;
      height: 45px;
      //padding: 8px 16px;
      border-radius: 8px;

      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;

      border: none;

      background-color: ${({ theme }) => theme.color.primary};
      color: #3d3d3d; // TODO: manage the color using theme instead

      cursor: pointer;
    }
  }
`;

type ReviewCardType = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};

type ShowCaseBodyProps = {
  selectedPlatformArticleList: ReviewCardType[];
  setSelectedPlatformArticleList: React.Dispatch<React.SetStateAction<ReviewCardType[]>>;
};

const ShowCaseBody = ({
  selectedPlatformArticleList,
  setSelectedPlatformArticleList,
}: ShowCaseBodyProps) => {
  // TODO: replace your card here
  // const [reviewList] = useState(initialState);

  return (
    <Container>
      {selectedPlatformArticleList.map(
        ({ coverUrl, title, daysAndOverview, author, game, commNum, likeNum }) => {
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
        }
      )}

      {/* load more */}
      <div className="loadMore-container">
        <button
          type="button"
          className="loadMore-btn"
        >
          Load more
        </button>
      </div>
    </Container>
  );
};

export default ShowCaseBody;
