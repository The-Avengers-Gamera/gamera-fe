import styled from 'styled-components';
import bgImg from '../assets/hexagon.png';

const GameImg = styled.img`
  overflow: hidden;
  width: 230px;
  height: 333px;
  object-fit: cover;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /* align-items: center; */
  /* height: 100px; */
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
  width: 205px;
`;

const GameCard = styled.div`
  margin-top: 3%;
  padding: 10px 13px 3px 10px;
  margin-right: 67px;
  width: 250px;
  height: 480px;
  &:focus,
  &:hover {
    background-color: rgb(50, 53, 58);
    ${Title} {
      color: #6ddb03;
    }
    ${GameImg} {
      transform: scale(1.05);
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const ScoreCover = styled.div`
  display: flex;
  width: 30px;
  height: 35px;
  background: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Score = styled.div`
  width: 30px;
  color: #3d3d3d;
  font-size: 18px;
  font-weight: 800;
  /* line-height: 30px; */
  padding-top: 4px;
  height: 35px;
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
          <ScoreCover>
            <Score>{scores}</Score>
          </ScoreCover>
        </Wrapper2>
        <Platform>{platform}</Platform>
        <Publisher>{publishers}</Publisher>
      </Wrapper1>
    </GameCard>
  );
};

export default ReviewCard;
