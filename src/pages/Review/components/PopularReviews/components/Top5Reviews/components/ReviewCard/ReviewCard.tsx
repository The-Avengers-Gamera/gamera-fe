import styled from 'styled-components';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const Container = styled.div`
  max-width: 360px;
  height: 50px;

  // border: 1px solid #fff;

  color: #fff;

  & .reviewTitle {
    font-family: Roboto;

    margin-bottom: 5px;

    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 0em;
  }
  & .comment {
    font-family: Roboto;

    width: 70px;
    height: 20px;
    display: flex;
    align-items: center;

    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0em;
  }
`;

const ChatIcon = styled(ChatRoundedIcon)`
  color: ${({ theme }) => theme.color.main};
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

// type --------------
type Props = {
  title: string;
  commentNum: number;
};

const ReviewCard = ({ title, commentNum }: Props) => {
  return (
    <Container>
      <div className="reviewTitle">{title}</div>
      <div className="comment">
        <ChatIcon />
        <span>{commentNum}</span>
      </div>
    </Container>
  );
};

export default ReviewCard;
