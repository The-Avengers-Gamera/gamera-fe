import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import BarButton from '../BarButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & BarButton {
    width: 190px;
  }
`;

const SortBars = () => {
  return (
    <Container>
      <BarButton>
        Sort by latest <KeyboardArrowDownIcon />
      </BarButton>
      <BarButton>
        All Genres <KeyboardArrowDownIcon />
      </BarButton>
    </Container>
  );
};

export default SortBars;
