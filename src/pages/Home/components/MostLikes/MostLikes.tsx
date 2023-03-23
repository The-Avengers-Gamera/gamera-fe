// import { v4 as uuid } from 'uuid';
// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';
import LikeCard from '../MostLikes/MostLikesCom/LikeCard';
import { getArticlesOrderByLike } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';
import { IPage } from '@/interfaces/page';

// const cards = ['card', 'card', 'card', 'card', 'card', 'card'];

// TODO: pls replace below mock data sent from backend with axios request------------------------------------------------------------
type LikeItemType = {
  coverUrl: string;
  title: string;
  commNum: string;
  likeNum: string;
};

const initialState: LikeItemType[] = [];

const mockLikeItem = {
  coverUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  commNum: '2.6K',
  likeNum: '10,311',
};
for (let i = 0; i < 10; ) {
  initialState.push(structuredClone(mockLikeItem));
  mockLikeItem.title = `The Last Of Us Part 1 Review ${i}`; // mock data: make title unique
  i += 1;
}

const MostLikes = () => {
  const [cards, setCards] = useState<IArticleCard[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesOrderByLike()
      .then(({ data: myData }) => {
        setCards(myData.data);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return (
    <GeneralContainer
      sx={{ padding: '0.5rem 7rem 1rem' }}
      header={
        <ContainerHeader
          padding="5rem 7rem 0rem"
          title="MOST LIKED"
        />
      }
      laptop={5.9}
      mobile={12}
      rowGapPx="10px"
      divider
    >
      {cards.map(({ title, coverImgUrl, likeCount, commentCount }) => {
        return (
          <LikeCard
            key={title}
            coverUrl={coverImgUrl}
            title={title}
            commNum={commentCount}
            likeNum={likeCount}
          />
        );
      })}
    </GeneralContainer>
  );
};
export default MostLikes;
