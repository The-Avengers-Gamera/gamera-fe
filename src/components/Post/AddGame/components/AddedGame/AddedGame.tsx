import { platform } from 'os';
import styled from 'styled-components';
import { IArticle } from '@/interfaces/article';

const AddedGameContainer = styled.div`
  width: 353.95px;
  height: 143px;
  border-radius: 15px;
  background: #303442;
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const GameImage = styled.img`
  width: 30%;
  height: 96.63px;
  border-radius: 10px;
  margin-left: 1rem;
`;

const GameContentContainer = styled.div`
  width: 60%;
  height: 96.63px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const GameNameContainer = styled.div`
  width: 100%;
  font-size: 24px;
  color: #cbcbcb;
  font-weight: 700;
`;

const GenreContainer = styled.div`
  width: 100%;
  font-size: 14px;
  color: #cbcbcb;
  font-weight: 700;
`;

const PlatformContainer = styled.div`
  width: 100%;
  font-size: 14px;
  color: #6ddb03;
  font-weight: 700;
`;

export const AddedGame = () => {
  const MockGame = {
    name: 'Elden Ring',
    genre: 'FROMSOFTWARE',
    platform: ['PC,', 'XBOX,', 'PS4,', 'PS5'],
  };

  return (
    <AddedGameContainer>
      <GameImage
        alt="game"
        src="https://assets1.ignimgs.com/2023/03/21/atlasfallen-preview-deck-663300-1679407499860.jpg"
      />
      <GameContentContainer>
        <GameNameContainer>{MockGame.name}</GameNameContainer>
        <GenreContainer>{MockGame.genre}</GenreContainer>
        <PlatformContainer>{MockGame.platform}</PlatformContainer>
      </GameContentContainer>
    </AddedGameContainer>
  );
};

export default AddedGame;
