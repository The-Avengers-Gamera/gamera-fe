import React from 'react';
import styled from 'styled-components';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';

const CardContainer = styled.div`
  /* background-color: green; */
  width: 400px;
  position: relative;
  cursor: pointer;

  &:hover .cover-img {
    transform: scale(1.05);
  }
`;

const NewsCardCover = styled.div`
  width: 100%;
  height: 220px;
  max-width: 100%;
  object-fit: cover;
  display: block;
  clip-path: polygon(0 23px, 130px 23px, 145px 0, 100% 0, 100% 100%, 0 100%);

  img {
    width: 100%;
    transition: transform 0.5s;
  }
`;

const NewsCardTitle = styled.div`
  background-color: #22252a;
  text-align: center;
  height: 70px;
  padding: 0 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 70px;
  border-bottom: 1px solid #3d3d3d;
  font-weight: bold;
  font-size: 18px;
`;

const NewsCardTimeAuthor = styled.div`
  background-color: #22252a;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 0 25px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px));

  div {
    display: flex;
    color: ${({ theme }) => theme.color.primary};
    span {
      margin-left: 10px;
      color: white;
      font-weight: bold;
    }
    span.author {
      text-transform: uppercase;
    }
  }
`;

const HomeNewsCard = () => {
  const newsCardData = {
    title: 'Hogwarts Legacy: How to Open Eye Chests',
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
