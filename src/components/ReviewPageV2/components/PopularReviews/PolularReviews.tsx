import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import { IArticleCard } from '@/interfaces/article';
import { getPopularReviews } from '@/services/article';
import Top5Reviews from './components/Top5Reviews';
import TopReviewCover from './components/TopReviewCover';

const GeneralContainer = styled.div`
  background-color: #000000;
  height: 575px;
  padding: 0px 95px 95px;
  position: relative;
  clip-path: polygon(0% 0%, 35% 0%, 37% 5%, 63% 5%, 65% 0%, 100% 0%, 100% 100%, 0% 100%);

  & .titleContainer {
    height: 95px;
    position: relative;

    & h2 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 450px;

      font-family: Montserrat;
      font-size: 28px;
      font-weight: 600;
      text-transform: capitalize;

      text-align: center;

      border-bottom: 1px solid #5d5d5d; // TODO: manage the color using theme instead
    }
  }

  & .bodyContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    height: 750px;
    padding: 0px 20px 60px;

    & .titleContainer h2 {
      width: 100%;
      font-size: 24px;
    }

    & .bodyContainer {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 568px) {
    height: 650px;
    padding: 0px 20px 60px;

    & .bodyContainer {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 20px;
`;

const TopReviews = styled.div`
  margin-left: 40px;
`;

const PopularReviews = () => {
  const [popularReviews, setPopularReviews] = useState<IArticleCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getPopularReviews()
      .then(({ data: { data: reviewsList } }) => {
        setPopularReviews(reviewsList);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <GeneralContainer>
        <div className="titleContainer">
          <h2>Popular Reviews</h2>
        </div>
        <div className="bodyContainer">
          <Container>
            <Skeleton
              variant="rounded"
              width={600}
              height={390}
            />
            <TopReviews>
              <Skeleton
                variant="rounded"
                width={385}
                height={390}
              />
            </TopReviews>
          </Container>
        </div>
      </GeneralContainer>
    );
  }

  return (
    <GeneralContainer>
      <div className="titleContainer">
        <h2>Popular Reviews</h2>
      </div>
      <div className="bodyContainer">
        {popularReviews.length > 1 && (
          <>
            <Link to={`/article/${popularReviews[0].id}`}>
              <TopReviewCover coverImgUrl={popularReviews[0].coverImgUrl} />
            </Link>

            <Top5Reviews
              isLoading={isLoading}
              isError={isError}
              popularReviews={popularReviews}
            />
          </>
        )}
      </div>
    </GeneralContainer>
  );
};

export default PopularReviews;
