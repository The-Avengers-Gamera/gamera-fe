import styled from 'styled-components';
import AddedGame from '../../../AddedGame';

const AddGameItemContainer = styled.div`
  width: 605.38px;
  height: 170.4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
`;

export const AddGameItem = () => {
  return (
    <AddGameItemContainer>
      <AddedGame />
    </AddGameItemContainer>
  );
};

export default AddGameItem;
