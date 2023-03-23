import { platform } from 'os';
import styled from 'styled-components';
import { IArticle } from '@/interfaces/article';

const AddedGameContainer = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const GameImageContainer = styled.div`
  width: 25%;
  height: 80%;
  border-radius: 10px;
  margin-left: 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const GameContentContainer = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const GameNameAndGenreContainer = styled.div`
  width: 100;
  height: 30%;
`;

const GameNameContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: #cbcbcb;
  font-weight: 700;
`;

const GenreContainer = styled.div`
  width: 100%;
  font-size: 0.3rem;
  color: #cbcbcb;
  font-weight: 700;
`;

const PlatformContainer = styled.div`
  width: 100%;
  font-size: 0.3rem;
  color: #6ddb03;
  font-weight: 700;
`;

type Props = {
  useWindowStyle: boolean;
  MockGame: {
    name: string;
    genre: string;
    platform: string[];
    img: string;
  };
};

export const AddedGame = ({ useWindowStyle, MockGame }: Props) => {
  const AddedGameButtonStyle = {
    backgroundColor: '#303442',
  };

  const AddedGameWindowStyle = {
    backgroundColor: '#2C2F3B',
  };

  return (
    <AddedGameContainer style={useWindowStyle ? AddedGameWindowStyle : AddedGameButtonStyle}>
      <GameImageContainer>
        <Img
          alt="game"
          src={MockGame.img}
        />
      </GameImageContainer>
      <GameContentContainer>
        <GameNameAndGenreContainer>
          <GameNameContainer>{MockGame.name}</GameNameContainer>
          <GenreContainer>{MockGame.genre}</GenreContainer>
        </GameNameAndGenreContainer>
        <PlatformContainer>{MockGame.platform}</PlatformContainer>
      </GameContentContainer>
    </AddedGameContainer>
  );
};

export default AddedGame;
