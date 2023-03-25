import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';
import { IPopularReview } from '@/interfaces/article';
import { getPopularReviews } from '@/services/article';

const Container = styled.div`
  //border: 1px solid #fff;
  width: 375px;
  height: 350px;

  /* display: flex; */

  & li {
    margin-bottom: 15px;
  }
`;

const Top5Reviews = () => {
  const [popularReviews, setPopularReviews] = useState<IPopularReview[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPopularReviews()
      .then((res) => {
        const reviewsList = res.data;
        setPopularReviews(reviewsList.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  return (
    <Container>
      {isLoading && <div>loading...</div>}
      {isError && <div>load failed</div>}
      <li>
        {popularReviews?.slice(0, 5).map((item, cardIndex) => (
          <ReviewCard
            title={item.title}
            commentNum={item.commentNum}
            cardIndex={cardIndex}
          />
        ))}
      </li>
    </Container>
  );
};

export default Top5Reviews;
