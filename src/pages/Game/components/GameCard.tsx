import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 7%;
  background-color: #1e2126;
`;

const Header = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Cover = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Title = styled.div`
  width: 100%;
  min-width: 150px;
`;

const Score = styled.div`
  width: 100%;
  min-width: 150px;
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
    <Container>
      <Header>GAME</Header>
      <Wrapper>
        <Cover>
          <img
            src={imgUrl}
            alt=""
          />
        </Cover>
        <Title>{name}</Title>
        <Score>{scores}</Score>
        <Platform>{platform}</Platform>
        <Publisher>{publishers}</Publisher>
      </Wrapper>
    </Container>
  );
};

export default ReviewCard;
