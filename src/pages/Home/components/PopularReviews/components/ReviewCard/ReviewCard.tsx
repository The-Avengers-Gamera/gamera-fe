import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'; // time icon
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'; // author icon
import { titleOfCards } from '@/pages/Home/utils/useFont';

const Container = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Cover = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  & img {
    overflow: hidden;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Title = styled.div`
  ${titleOfCards}
  width: 100%;
  padding-top: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 9px;
  min-width: fix-content;
  text-overflow: ellipsis;
  white-space: nowrap;
  & .authorName_container {
    display: flex;
    align-items: center;
    overflow: hidden;
    & span {
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
  }

  & .publishTime_container {
    display: flex;
    align-items: center;
    //color: ${({ theme }) => theme.color.primary};
    overflow: hidden;
    & span {
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
  }
`;

const FooterAuthorIcon = styled(PersonRoundedIcon)`
  color: ${({ theme }) => theme.color.primary};
`;
const FooterPublishTimeIcon = styled(AccessTimeFilledRoundedIcon)`
  color: ${({ theme }) => theme.color.primary};
`;

type ReviewCardProps = {
  meta: {
    id: number;
    coverUrl: string;
    title: string;
    author: string;
    publishTime: string | undefined;
  };
};

const ReviewCard = ({ meta }: ReviewCardProps) => {
  const { id, coverUrl, title, author, publishTime } = meta;
  return (
    <Container>
      <Link to={`/article/${id}`}>
        {/* TODO: router to be added when click on cover img or title */}
        <Cover>
          <img
            src={coverUrl}
            alt=""
          />
        </Cover>

        <Title>{title}</Title>

        <Footer>
          <div className="authorName_container">
            <FooterAuthorIcon />
            <span>{author}</span>
          </div>
          <div className="publishTime_container">
            <FooterPublishTimeIcon />
            <span>{publishTime}</span>
          </div>
        </Footer>
      </Link>
    </Container>
  );
};

export default ReviewCard;
