import styled from 'styled-components';
import AddGameItem from './components/AddGameItem';

const AddGameWindowContainer = styled.div`
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
  height: 2.5rem;
  background: #2c2f3b;
  border: 2px solid #6ddb03;
  border-radius: 10px;
  margin-top: 2rem;
`;

export const AddGameWindow = () => {
  return (
    <AddGameWindowContainer>
      <Header>ADD GAME</Header>
      <Input />
      <AddGameItem />
    </AddGameWindowContainer>
  );
};

export default AddGameWindow;
