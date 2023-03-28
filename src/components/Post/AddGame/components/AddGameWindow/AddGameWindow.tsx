import React from 'react';
import styled from 'styled-components';
import { ICurrentGame } from '@/interfaces/game';
import AddGameItem from './components/AddGameItem';

const AddGameWindowContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: evenly;
  align-items: center;
`;

const Header = styled.div`
  color: #6ddb03;
  font-size: 25px;
  font-weight: 700;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 90%;
  height: 3rem;
  background: #2c2f3b;
  border: 2px solid #6ddb03;
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
  justify-content: center;
  align-items: center;
`;

type Props = {
  changeIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentGame: React.Dispatch<React.SetStateAction<ICurrentGame>>;
  closeModal: () => void;
};

export const AddGameWindow = ({ changeIsAdd, closeModal, setCurrentGame }: Props) => {
  const MockGameArr = [
    {
      name: 'Elden Ring',
      genre: 'FROMSOFTWARE',
      platform: ['PC,', 'XBOX,', 'PS4,', 'PS5'],
      img: 'https://assets1.ignimgs.com/2023/03/21/atlasfallen-preview-deck-663300-1679407499860.jpg',
    },
    {
      name: 'RStar Wars',
      genre: 'WARE',
      platform: ['XBOX,'],
      img: 'https://assets-prd.ignimgs.com/2023/02/28/star-wars-the-deckbuilding-game-button-1677620694999.jpg',
    },
    {
      name: 'Wo Long',
      genre: 'ENDNIGHT',
      platform: ['PS4,', 'PS5'],
      img: 'https://assets-prd.ignimgs.com/2022/06/12/wo-long-button-1-1655066531634.jpg',
    },
  ];

  return (
    <AddGameWindowContainer>
      <Header>ADD GAME</Header>
      <Input />
      <AddGameItemContainer>
        {MockGameArr.map((mockGame) => (
          <AddGameItem
            MockGame={mockGame}
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
