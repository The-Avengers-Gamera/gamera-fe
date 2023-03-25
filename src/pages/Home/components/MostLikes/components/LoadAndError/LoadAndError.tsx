import styled from 'styled-components';

const LoadAndErrorContainer = styled.div`
  color: white;
  font-size: 1.5rem;
`;

export const LoadAndError = ({ type }: { type: string }) => {
  const alarmMessage = (() => {
    switch (type) {
      case 'error':
        return 'load failed';
      default:
        return 'loading';
    }
  })();
  return <LoadAndErrorContainer>{alarmMessage}</LoadAndErrorContainer>;
};

export default LoadAndError;
