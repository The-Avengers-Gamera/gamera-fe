import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import AddedGame from './components/AddedGame';
import AddGameWindow from './components/AddGameWindow';
import EmptyGame from './components/EmptyGame';

const AddGameModal = styled(ReactModal)`
  background-color: #2c2f3b;
  width: 35%;
  height: 600px;
  border-radius: 23px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const AddGame = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <AddGameWindow />
      </AddGameModal>
      {isAdd ? <AddedGame /> : <EmptyGame openModal={openModal} />}
    </div>
  );
};

export default AddGame;
