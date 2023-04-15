import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

const LoadAndErrorContainer = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 580px;
`;

const ImgContainer = styled.div`
  width: 75px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 500px;
`;

const Loading = () => {
  return (
    <Container>
      <ImgContainer>
        <Skeleton
          variant="rectangular"
          width={65}
          height={65}
        />
      </ImgContainer>

      <SubContainer>
        <Skeleton
          variant="rectangular"
          width={400}
          height={15}
        />
        <Skeleton
          variant="rectangular"
          width={100}
          height={15}
        />
      </SubContainer>
    </Container>
  );
};

export const LoadAndError = ({ type }: { type: string }) => {
  const alarmMessage = (() => {
    switch (type) {
      case 'error':
        return 'load failed';
      default:
        return <Loading />;
    }
  })();
  return <LoadAndErrorContainer>{alarmMessage}</LoadAndErrorContainer>;
};

export default LoadAndError;
