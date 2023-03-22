import styled from 'styled-components';

const AddGameButtonContainer = styled.div`
  width: 143px;
  height: 143px;
  border-radius: 15px;
  background: #303442;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const PlusSymbolContainer = styled.div`
  width: 55.21px;
  height: 55.21px;
  background: rgba(216, 216, 216, 0.45);
  border-radius: 50%;
  font-size: 3rem;
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
