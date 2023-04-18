import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
`;

const SubContainer = styled.div`
  margin: 22px 0;
`;

const TrendingNewsLoading = () => {
  return (
    <Container>
      <Skeleton
        variant="rectangular"
        width={396}
        height={240}
      />
      <SubContainer>
        <Skeleton
          variant="rectangular"
          width={200}
          height={15}
        />
      </SubContainer>
      <SubContainer>
        <Skeleton
          variant="rectangular"
          width={300}
          height={15}
        />
      </SubContainer>
    </Container>
  );
};

export default TrendingNewsLoading;
