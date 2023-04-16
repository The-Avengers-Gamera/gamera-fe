import styled from 'styled-components';

const EmailVerifyContainer = styled.form`
  margin-top: 10%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  gap: 20%;
  justify-content: center;
`;

const InfoContainer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 10%;
`;

const VerifyMessage = () => {
  return (
    <EmailVerifyContainer>
      <InfoContainer>
        <h2> Account activation</h2>
        <p>Active account email was sent, please active your account before login.</p>
      </InfoContainer>
    </EmailVerifyContainer>
  );
};

export default VerifyMessage;
