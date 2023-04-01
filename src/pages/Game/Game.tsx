import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { IGameCard } from '@/interfaces/game';
import GameCard from './components/GameCard';
import { getGames } from '@/services/game';

const TopContainer = styled.div`
  margin: 5% auto;
`;

const Header = styled.div`
  margin-left: 7%;
  padding-bottom: 10px;
  font-size: 36px;
  font-weight: 800;
`;

const Container = styled.div`
  margin-top: 20px;
  margin-left: 7%;
  background-color: rgb(30, 33, 38);
  max-width: 1300px;
`;

const Header2 = styled.div`
  padding-top: 30px;
  margin-left: 6%;
  font-size: 28px;
  font-weight: 800;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  margin-left: 6%;
`;

const GamePage = () => {
  const [gameCards, setGameCards] = useState<IGameCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>('Loading...');

  useEffect(() => {
    getGames()
      .then((res) => {
        setGameCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setMsg(err.error);
        setMsg('Fail to load');
      });
  }, []);

  return (
    <TopContainer>
      <Header>GAME DATA WAREHOUSE</Header>
      <Container>
        <Header2>GAMES</Header2>
        <Wrapper>
          {isLoading
            ? [msg]
            : gameCards?.map((gameCard) => (
                <GameCard
                  gameData={{
                    imgUrl: gameCard.imgUrl,
                    name: gameCard.name,
                    scores: gameCard.scores,
                    platform: gameCard.platform,
                    publishers: gameCard.publishers,
                  }}
                />
              ))}
        </Wrapper>
      </Container>
    </TopContainer>
  );
};

export default GamePage;
