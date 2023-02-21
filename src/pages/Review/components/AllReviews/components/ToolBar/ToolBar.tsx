import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from './components/SortBars';

const Container = styled.div`
  border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

const ToolBar = () => {
  return (
    <Container>
      {/* should employ state, instead of :hover when click on a button */}
      <PlatformBars />
      <SortBars />
    </Container>
  );
};

export default ToolBar;
