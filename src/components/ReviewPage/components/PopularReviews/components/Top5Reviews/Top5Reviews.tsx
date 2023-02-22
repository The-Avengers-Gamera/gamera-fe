import { useState } from 'react';

import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';

import one from './src/one.png';
import two from './src/two.png';
import three from './src/three.png';
import four from './src/four.png';
import five from './src/five.png';

const Container = styled.div`
  //border: 1px solid #fff;
  width: 375px;
  height: 350px;

  display: flex;

  & .cardsIndexes {
    margin-right: 30px;

    & li {
      width: 24px;
      height: 24px;

      margin-bottom: 42px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }

  & .cardsBody {
    & li {
      margin-bottom: 15px;
    }
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
  { title: 'Zelda:breadth of the wild review', commentNum: 44 },
  { title: 'Red dead redemption review', commentNum: 55 },
];
// TODO: -----------------------------------------------------------------------------------

const cardIndexesImgs = [one, two, three, four, five];

const Top5Reviews = () => {
  const [top5Reviews, setTop5Reviews] = useState(mockTop5Reivews);

  return (
    <Container>
      {/* <div className="title"> Popular Reveiws</div> */}

      {/* a list of card index img */}
      <ul className="cardsIndexes">
        {cardIndexesImgs.map((cardIndexImg) => {
          return (
            <li>
              <img
                src={cardIndexImg}
                alt="cardIndex"
              />
            </li>
          );
        })}
      </ul>
      {/* a list of review info card body */}
      <ul className="cardsBody">
        {top5Reviews.map(({ title, commentNum }) => {
          return (
            <li>
              <ReviewCard
                title={title}
                commentNum={commentNum}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Top5Reviews;
