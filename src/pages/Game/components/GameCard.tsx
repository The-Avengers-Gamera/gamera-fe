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

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
  width: 210px;
`;

const Score = styled.div`
  width: 15px;
  color: #3d3d3d;
  font-size: 18px;
  font-weight: 800;
`;

const Platform = styled.div`
  width: 100%;
  min-width: 150px;
  color: #8f8f8f;
  font-size: 14px;
`;

const Publisher = styled.div`
  width: 100%;
  min-width: 150px;
  font-size: 18px;
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
      <Wrapper1>
        <Wrapper2>
          <Title>{name}</Title>
          <Score>{scores}</Score>
        </Wrapper2>
        <Platform>{platform}</Platform>
        <Publisher>{publishers}</Publisher>
      </Wrapper1>
    </GameCard>
  );
};

export default ReviewCard;
