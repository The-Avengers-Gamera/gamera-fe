import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { updateUserVerify } from '@/services/user';

const EmailVerifyContainer = styled.form`
  margin-top: 20%;
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

const ActiveButtonContainer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActiveButton = styled.button`
  width: 12rem;
  height: 8rem;
  background-color: #6bd607;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1rem;
  font-weight: 700;
`;

const EmailVerify = () => {
  return (
    <EmailVerifyContainer>
      <InfoContainer>
        <h2> Account activation</h2>
        <p>Active account email was sent, please active your account before login.</p>
      </InfoContainer>
      <ActiveButtonContainer>
        <ActiveButton>
          <Link to="/login">Done</Link>
        </ActiveButton>
      </ActiveButtonContainer>
    </EmailVerifyContainer>
  );
};

export default EmailVerify;
