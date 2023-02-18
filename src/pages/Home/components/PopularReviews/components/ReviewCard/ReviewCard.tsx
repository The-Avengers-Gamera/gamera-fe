import styled from 'styled-components';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'; // time icon
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'; // author icon

// css ----------------------------------------
const Container = styled.div`
  width: 273px;
  height: 314px;

  //border: solid 1px;
  font-family: Poppins;
`;

const Cover = styled.div`
  height: 243px;

  border-radius: 5px;

  & img {
    width: 100%;
    height: 100%;

    border-radius: 5px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  & :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  & .authorName {
    display: flex;
    align-items: center;

    & span {
      margin-left: 5px;

      font-size: 16px;
      font-weight: bold;
    }
  }

  & .publishTime {
    display: flex;
    align-items: center;

    & span {
      margin-left: 5px;

      font-size: 16px;
      font-weight: 700;
    }
  }
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
        <div className="authorName">
          <PersonRoundedIcon style={{ color: '#6DDB03' }} />
          <span>{authorName}</span>
        </div>

        <div className="publishTime">
          <AccessTimeFilledRoundedIcon style={{ color: '#6DDB03' }} />
          <span>{publishTime}</span>
        </div>
      </Footer>
    </Container>
  );
};

export default ReviewCard;
