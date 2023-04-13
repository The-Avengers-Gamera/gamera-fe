import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

const Loading = styled.div`
  width: 240px;
  height: 480px;
  margin-top: 3%;
  margin-right: 67px;
`;

const TitleScore = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% auto;
`;

const GameLoading = () => {
  return (
    <Loading>
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={333}
        width={230}
      />
      <TitleScore>
        <Skeleton
          animation="wave"
          height={20}
          width="50%"
        />
        <Skeleton
          animation="wave"
          variant="circular"
          width={30}
          height={30}
        />
      </TitleScore>
      <Skeleton
        animation="wave"
        height={20}
        width="25%"
      />
      <Skeleton
        animation="wave"
        height={20}
        width="70%"
      />
    </Loading>
  );
};

export default GameLoading;
