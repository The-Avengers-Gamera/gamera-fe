import React, { useEffect, useState } from 'react';
import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';
import LikeCard from './components/LikeCard/LikeCard';
import { getArticlesOrderByLike } from '@/services/article';
import LoadAndError from './components/LoadAndError';

const MostLikes = () => {
  const [cards, setCards] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesOrderByLike()
      .then(({ data: myData }) => {
        setCards(myData.data);
        setIsLoad(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoad(false);
      });
  }, []);

  if (isError) {
    return <div>Load failed!</div>;
  }
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
      {isLoad
        ? [<LoadAndError type="load" />]
        : cards.map((card: any) => {
            return (
              <LikeCard
                key={card.title}
                coverUrl={card.coverImgUrl}
                title={card.title}
                commNum={card.commentsNum}
                likeNum={card.like}
              />
            );
          })}
    </GeneralContainer>
  );
};
export default MostLikes;
