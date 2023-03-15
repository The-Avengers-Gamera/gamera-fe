import styled from 'styled-components';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'; // time icon
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'; // author icon
import { titleOfCards } from '@/pages/Home/utils/useFont';

// css ----------------------------------------
const Container = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Cover = styled.div`
  border-radius: 5px;
  & img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Title = styled.div`
  ${titleOfCards}
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

// types ---------------------------------------
type ReviewCardProps = {
  coverUrl: string;
  title: string;
  authorName: string;
  publishTime: string;
};

// components ----------------------------------
const ReviewCard = ({ coverUrl, title, authorName, publishTime }: ReviewCardProps) => {
  return (
    <Container>
      {/* TODO: router to be added when click on cover img or title */}
      <Cover>
        {/* fake href */}
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <img
            src={coverUrl}
            alt=""
          />
        </a>
      </Cover>

      <Title>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          {title}
        </a>
      </Title>

      <Footer>
        <div className="authorName_container">
          <FooterAuthorIcon />
          <span>{authorName}</span>
        </div>

        <div className="publishTime_container">
          <FooterPublishTimeIcon />
          <span>{publishTime}</span>
        </div>
      </Footer>
    </Container>
  );
};

export default ReviewCard;
