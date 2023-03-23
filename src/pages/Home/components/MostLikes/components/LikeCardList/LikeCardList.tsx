import styled from 'styled-components';
import LikeCard from '../LikeCard/LikeCard';

export const LikeCardList = ({ cards }: { cards: any[] }) => {
  return (
    <>
      {cards.map((card: any) => (
        <LikeCard
          key={card.title}
          coverUrl={card.coverImgUrl}
          title={card.title}
          commNum={card.commentsNum}
          likeNum={card.like}
        />
      ))}
    </>
  );
};

export default LikeCardList;
