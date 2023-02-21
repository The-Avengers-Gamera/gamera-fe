import styled from 'styled-components';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const Container = styled.div`
  max-width: 360px;
  height: 50px;

  border: 1px solid #fff;

  display: flex;

  & .cardIndex {
    border-radius: 50% solid #fff;
    color: #fff;
  }

  & .cardItem {
    color: #fff;

    & .reviewTitle {
      font-family: Roboto;
    }
    & .comment {
      font-family: Roboto;
    }
  }
`;

type Props = {
  title: string;
  commentNum: number;
};

const ReviewCard = ({ title, commentNum }: Props) => {
  return (
    <Container>
      <div className="cardItem">
        <div className="reviewTitle">{title}</div>
        <div className="comment">
          <ChatRoundedIcon sx={{ backgroundColor: 'blue' }} />
          <span>{commentNum}</span>
        </div>
      </div>
    </Container>
  );
};

export default ReviewCard;
