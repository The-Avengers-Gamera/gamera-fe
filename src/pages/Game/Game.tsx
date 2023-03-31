import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { IGameCard } from '@/interfaces/game';
import GameCard from './components/GameCard';
import { getGames } from '@/services/game';

const TopContainer = styled.div`
  margin: 8% auto;
`;

const Header = styled.div`
  margin-left: 5%;
  padding-bottom: 10px;
  font-size: 36px;
  font-weight: 800;
`;

const GamePage = () => {
  //   const { id, coverUrl, title, author } = gameData;
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
    </TopContainer>
  );
};

export default GamePage;
