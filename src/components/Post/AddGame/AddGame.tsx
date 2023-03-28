import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { ICurrentGame } from '@/interfaces/game';
import AddedGame from './components/AddedGame';
import AddGameWindow from './components/AddGameWindow';
import EmptyGame from './components/EmptyGame';

const AddGameModal = styled(ReactModal)`
  background-color: #2c2f3b;
  width: 35%;
  height: 40rem;
  border-radius: 17px;
  margin: 0 auto;
  margin-top: 50px;
`;

const AddedGameContainer = styled.div`
  display: inline-block;
  width: 18rem;
  height: 7rem;
  margin: 1rem 0;
`;

const initialGame = {
  name: 'Elden Ring',
  genre: 'FROMSOFTWARE',
  platform: ['PC,', 'XBOX,', 'PS4,', 'PS5'],
  img: 'https://assets1.ignimgs.com/2023/03/21/atlasfallen-preview-deck-663300-1679407499860.jpg',
};

export const AddGame = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState<ICurrentGame>(initialGame);

  const changeIsAddAsTrue = () => {
    setIsAdd(true);
  };

  const changeIsAddAsClose = () => {
    setIsAdd(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <AddGameModal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            zIndex: 1200,
          },
        }}
        shouldCloseOnEsc
        onRequestClose={closeModal}
      >
        <AddGameWindow
          changeIsAdd={changeIsAddAsTrue}
          closeModal={closeModal}
          setCurrentGame={setCurrentGame}
        />
      </AddGameModal>
      {isAdd ? (
        <AddedGameContainer>
          <AddedGame
            useWindowStyle={false}
            CurrentGame={currentGame}
            changeIsAddAsClose={changeIsAddAsClose}
          />
        </AddedGameContainer>
      ) : (
        <EmptyGame openModal={openModal} />
      )}
    </div>
  );
};

export default AddGame;
