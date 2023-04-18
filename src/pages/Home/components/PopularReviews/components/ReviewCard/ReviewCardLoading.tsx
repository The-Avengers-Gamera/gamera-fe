import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  min-width: 150px;
`;
const SubContainer = styled.div`
  margin-top: 15px;
`;

const ReviewCardLoading = () => {
  return (
    <Container>
      <Skeleton
        variant="rounded"
        width={400}
        height={260}
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
          width={310}
          height={15}
        />
      </SubContainer>
    </Container>
  );
};

export default ReviewCardLoading;
