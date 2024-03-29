import styled from 'styled-components';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

import one from './src/one.png';
import two from './src/two.png';
import three from './src/three.png';
import four from './src/four.png';
import five from './src/five.png';

const cardIndexesImgs = [one, two, three, four, five];

const CardContainer = styled.div`
  max-width: 360px;
  min-height: 50px;
  @media screen and (max-width: 768px) {
  }

  // border: 1px solid #fff;

  color: #fff;

  display: flex;

  & .cardIndex {
    max-width: 24px;
    max-height: 24px;

    object-fit: cover;

    margin-right: 30px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .cardBody {
    padding-right: 5px;
    & .reviewTitle {
      font-family: Montserrat;

      margin-bottom: 5px;

      font-family: Montserrat;
      font-size: 16px;
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: 0em;
      @media screen and (max-width: 568px) {
        font-size: 12px;
      }
    }
    & .comment {
      font-family: Montserrat;

      width: 70px;
      height: 20px;
      display: flex;
      align-items: center;

      font-family: Montserrat;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0em;
      @media screen and (max-width: 568px) {
        font-size: 8px;
      }
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ChatIcon = styled(ChatRoundedIcon)`
  color: ${({ theme }) => theme.color.primary};
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

// type --------------
type Props = {
  title: string;
  commentNum: number;
  cardIndex: number;
};

const ReviewCard = ({ title, commentNum, cardIndex }: Props) => {
  return (
    <CardContainer>
      <div className="cardIndex">
        <img
          src={cardIndexesImgs[cardIndex]}
          alt=""
        />
      </div>

      <div className="cardBody">
        <div className="reviewTitle">{title}</div>

        <div className="comment">
          <ChatIcon />
          <span>{commentNum}</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default ReviewCard;
