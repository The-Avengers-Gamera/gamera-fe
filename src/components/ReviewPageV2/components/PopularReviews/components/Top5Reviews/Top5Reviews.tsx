/* eslint-disable no-console */
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

// TODO: replace mock data that represents data from backend with real axois http request --------------
// type Props = {
//   title: string;
//   commentNum: number;
// };

// interface IReviewCardPros {
//   review: IPopularReview;
// }

// const mockTop5Reivews: Props[] = [
//   { title: 'Last of us review ', commentNum: 11 },
//   { title: 'Metroid prime review', commentNum: 22 },
//   { title: 'Elder ring review', commentNum: 33 },
//   { title: 'Zelda:breadth of the wild review22222', commentNum: 44 },
//   { title: 'Red dead redemption review', commentNum: 55 },
// ];

const Top5Reviews = () => {
  const [popularReviews, setPopularReviews] = useState<IPopularReview[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPopularReviews()
      .then((res) => {
        const reviewsList = res.data;
        console.log('popular: ', reviewsList);
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
      {/* a list of review info */}
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
