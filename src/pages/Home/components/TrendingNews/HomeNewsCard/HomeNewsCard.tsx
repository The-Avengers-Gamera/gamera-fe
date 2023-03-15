import React from 'react';
import styled from 'styled-components';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import { titleOfCards } from '@/pages/Home/utils/useFont';

const CardContainer = styled.div`
  /* background-color: green; */
  width: 100%;
  max-width: 396px;
  position: relative;
  cursor: pointer;
  &:hover .cover-img {
    transform: scale(1.05);
  }
`;

const NewsCardCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  object-fit: cover;
  clip-path: polygon(0 23px, 80px 23px, 120px 0, 100% 0, 100% 100%, 0 100%);
  img {
    transition: transform 0.5s;
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
`;

const HomeNewsCard = () => {
  const newsCardData = {
    title: 'Hogwarts Legacy: How to Open Eye Chests and Find the Mirror of Erised',
    publishTime: '1 day ago',
    author: 'Luke Reilly',
    coverUrl:
      'https://assets1.ignimgs.com/2023/02/07/hogwarts-legacy-promo-10-1675736754011-1675784730573.png?crop=16%3A9&width=282&dpr=2',
  };

  return (
    <CardContainer>
      <NewsCardCover>
        <img
          className="cover-img"
          src={newsCardData.coverUrl}
          alt="news cover"
        />
      </NewsCardCover>
      <NewsCardTitle>{newsCardData.title}</NewsCardTitle>
      <NewsCardTimeAuthor>
        <div>
          <AccessTimeFilledIcon />
          <span>{newsCardData.publishTime}</span>
        </div>
        <div>
          <PersonIcon />
          <span className="author">{newsCardData.author}</span>
        </div>
      </NewsCardTimeAuthor>
    </CardContainer>
  );
};

export default HomeNewsCard;
