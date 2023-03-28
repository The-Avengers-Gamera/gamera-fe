import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';
import { IArticleCard } from '@/interfaces/article';

const Container = styled.div`
  //border: 1px solid #fff;
  width: 375px;
  height: 350px;

  /* display: flex; */

  & li {
    margin-bottom: 15px;
  }
`;

interface Top5ReviewsProps {
  popularReviews: IArticleCard[];
  isLoading: boolean;
  isError: boolean;
}

const Top5Reviews = ({ popularReviews, isLoading, isError }: Top5ReviewsProps) => (
  <Container>
    {isLoading && <div>loading...</div>}
    {isError && <div>load failed</div>}
    <li>
      {popularReviews?.slice(0, 5).map((item, cardIndex) => (
        <Link
          to={`/article/${item.id}`}
          key={item.id}
        >
          <ReviewCard
            title={item.title}
            commentNum={item.commentNum}
            cardIndex={cardIndex}
          />
        </Link>
      ))}
    </li>
  </Container>
);

export default Top5Reviews;
