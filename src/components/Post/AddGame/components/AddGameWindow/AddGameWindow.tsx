import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IGameCard } from '@/interfaces/game';
import AddGameItem from './components/AddGameItem';
import { getGames } from '@/services/game';
import useLockScroll from '@/hooks/useLockScroll';

const AddGameWindowContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: evenly;
  align-items: center;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: 25px;
  font-weight: 700;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 90%;
  height: 3rem;
  background: #2c2f3b;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  margin-top: 2rem;
`;

const AddGameItemContainer = styled.div`
  width: 90%;
  height: 70%;
  overflow: auto;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  changeIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentGame: React.Dispatch<React.SetStateAction<IGameCard>>;
  closeModal: () => void;
};

export const AddGameWindow = ({ changeIsAdd, closeModal, setCurrentGame }: Props) => {
  const [gameList, setGameList] = useState<IGameCard[]>([] as IGameCard[]);
  useLockScroll();

  useEffect(() => {
    getGames().then(({ data }) => {
      setGameList(data);
    });
  }, []);

  return (
    <AddGameWindowContainer>
      <Header>ADD GAME</Header>
      <Input />
      <AddGameItemContainer>
        {gameList.map((game) => (
          <AddGameItem
            key={game.id}
            game={game}
            changeIsAdd={changeIsAdd}
            closeModal={closeModal}
            setCurrentGame={setCurrentGame}
          />
        ))}
      </AddGameItemContainer>
    </AddGameWindowContainer>
  );
};

export default AddGameWindow;
