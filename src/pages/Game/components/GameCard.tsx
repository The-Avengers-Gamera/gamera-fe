import styled from 'styled-components';

const GameCard = styled.div`
  padding-top: 4%;
  margin-right: 67px;
  width: 235px;
`;

const GameImg = styled.img`
  overflow: hidden;
  width: 230px;
  height: 333px;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

const Score = styled.div`
  width: 100%;
`;

const Platform = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Publisher = styled.div`
  width: 100%;
  min-width: 150px;
`;

type GameCardProps = {
  gameData: {
    imgUrl: string;
    name: string;
    scores: number;
    platform: string[];
    publishers: string;
  };
};

const ReviewCard = ({ gameData }: GameCardProps) => {
  const { imgUrl, name, scores, platform, publishers } = gameData;
  return (
    <GameCard>
      <GameImg
        src={imgUrl}
        alt="game image"
      />
      <Title>{name}</Title>
      <Score>{scores}</Score>
      <Platform>{platform}</Platform>
      <Publisher>{publishers}</Publisher>
    </GameCard>
  );
};

export default ReviewCard;
