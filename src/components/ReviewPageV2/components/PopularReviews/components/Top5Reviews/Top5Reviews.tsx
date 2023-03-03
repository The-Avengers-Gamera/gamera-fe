import { useState } from 'react';

import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';

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
type Props = {
  title: string;
  commentNum: number;
};

const mockTop5Reivews: Props[] = [
  { title: 'Last of us review ', commentNum: 11 },
  { title: 'Metroid prime review', commentNum: 22 },
  { title: 'Elder ring review', commentNum: 33 },
  { title: 'Zelda:breadth of the wild review22222', commentNum: 44 },
  { title: 'Red dead redemption review', commentNum: 55 },
];
// TODO: -----------------------------------------------------------------------------------

const Top5Reviews = () => {
  const [top5Reviews, setTop5Reviews] = useState(mockTop5Reivews);

  return (
    <Container>
      {/* a list of review info */}
      {top5Reviews.map(({ title, commentNum }, cardIndex) => {
        return (
          <li>
            <ReviewCard
              title={title}
              commentNum={commentNum}
              cardIndex={cardIndex}
            />
          </li>
        );
      })}
    </Container>
  );
};

export default Top5Reviews;
