import { platform } from 'os';
import styled from 'styled-components';
import { IArticle } from '@/interfaces/article';
import { ICurrentGame } from '@/interfaces/game';

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
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 0.5rem;
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

const CloseContainer = styled.div`
  width: 11%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  z-index: 77;
`;

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

type Props = {
  useWindowStyle: boolean;
  CurrentGame: ICurrentGame;
  changeIsAddAsClose: () => void;
};

export const AddedGame = ({ useWindowStyle, CurrentGame, changeIsAddAsClose }: Props) => {
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
          src={CurrentGame.img}
        />
      </GameImageContainer>
      <GameContentContainer>
        <GameNameAndGenreContainer>
          <GameNameContainer>{CurrentGame.name}</GameNameContainer>
          <GenreContainer>{CurrentGame.genre}</GenreContainer>
        </GameNameAndGenreContainer>
        <PlatformContainer>{CurrentGame.platform}</PlatformContainer>
      </GameContentContainer>

      <CloseContainer>
        {!useWindowStyle && <CloseButton onClick={changeIsAddAsClose}>X</CloseButton>}
      </CloseContainer>
    </AddedGameContainer>
  );
};

export default AddedGame;
