import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import { titleOfCards } from '@/pages/Home/utils/useFont';

const CardContainer = styled.div`
  /* background-color: green; */
  width: 396px;
  overflow: hidden;
  cursor: pointer;
  &:hover .cover-img {
    transform: scale(1.05);
  }
`;

const NewsCardCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  clip-path: polygon(0 23px, 80px 23px, 120px 0, 100% 0, 100% 100%, 0 100%);
  img {
    object-fit: cover;
    transition: transform 0.5s;
    width: 100%;
    height: 100%;
  }
`;

const NewsCardTitle = styled.div`
  ${titleOfCards}
  background-color: #22252a;
  text-align: center;
  height: 70px;
  padding: 0 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 70px;
  border-bottom: 1px solid #3d3d3d;
`;

const NewsCardTimeAuthor = styled.div`
  background-color: #22252a;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0 25px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px));

  div {
    display: flex;
    color: ${({ theme }) => theme.color.primary};
    overflow: hidden;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 10px;
      color: white;
    }
    span.author {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 80px;
    align-items: center;
    justify-content: space-around;
  }
`;
type Props = {
  meta: {
    id: number;
    title: string;
    publishTime: string | undefined;
    author: string;
    coverUrl: string;
  };
};

const HomeNewsCard = ({ meta }: Props) => {
  const { id, title, publishTime, author, coverUrl } = meta;

  return (
    <CardContainer>
      <Link to={`/article/${id}`}>
        <NewsCardCover>
          <img
            className="cover-img"
            src={coverUrl}
            alt="news cover"
          />
        </NewsCardCover>
        <NewsCardTitle>{title}</NewsCardTitle>
        <NewsCardTimeAuthor>
          <div>
            <AccessTimeFilledIcon />
            <span>{publishTime}</span>
          </div>
          <div>
            <PersonIcon />
            <span className="author">{author}</span>
          </div>
        </NewsCardTimeAuthor>
      </Link>
    </CardContainer>
  );
};

export default HomeNewsCard;
