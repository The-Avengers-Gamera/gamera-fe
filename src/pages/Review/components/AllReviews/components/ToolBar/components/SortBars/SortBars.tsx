import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import BarButton from '../BarButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
