import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { IGameCard } from '@/interfaces/game';
import AddedGame from './components/AddedGame';
import AddGameWindow from './components/AddGameWindow';
import EmptyGame from './components/EmptyGame';

const AddGameModal = styled(ReactModal)`
  background-color: #2c2f3b;
  width: 35%;
  height: 80%;
  border-radius: 17px;
  margin: 50px auto 0;
  outline: none;
  border: none;
  box-shadow: none;
`;

const AddedGameContainer = styled.div`
  display: inline-block;
  width: 19rem;
  height: 7rem;
  margin: 1rem 0;
`;

interface AddGameProps {
  setGameId: (id: number, gameImgUrl: string) => void;
}
export const AddGame = ({ setGameId }: AddGameProps) => {
  const [isAdd, setIsAdd] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState<IGameCard>({} as IGameCard);

  useEffect(() => {
    setGameId(currentGame.id, currentGame.imgUrl);
  }, [currentGame.id]);

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
            background: 'rgba(0, 0, 0, 0.6)',
          },
        }}
        shouldCloseOnEsc
        onRequestClose={closeModal}
        appElement={document.getElementById('root') || undefined}
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
