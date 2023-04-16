import styled from 'styled-components';

const AddGameButtonContainer = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 15px;
  background: #303442;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

const PlusSymbolContainer = styled.div`
  width: 30%;
  height: 30%;
  background: rgba(216, 216, 216, 0.45);
  border-radius: 50%;
  font-size: 2rem;
  color: #303442;
  line-height: 1;
  text-align: center;
  cursor: pointer;
`;

export const EmptyGame = ({ openModal }: { openModal: () => void }) => {
  return (
    <AddGameButtonContainer>
      <PlusSymbolContainer onClick={openModal}>+</PlusSymbolContainer>
    </AddGameButtonContainer>
  );
};

export default EmptyGame;
