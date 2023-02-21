import styled from 'styled-components';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const Container = styled.div`
  max-width: 360px;
  height: 50px;

  border: 1px solid #fff;

  color: #fff;

  & .reviewTitle {
    font-family: Roboto;

    margin-bottom: 5px;
  }
  & .comment {
    font-family: Roboto;

    width: 70px;
    height: 20px;
    display: flex;
    align-items: center;
  }
`;

const ChatIcon = styled(ChatRoundedIcon)`
  color: ${({ theme }) => theme.color.main};
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

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
