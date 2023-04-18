import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { updateUserVerify } from '@/services/user';

const EmailVerifyContainer = styled.form`
  margin-top: 8%;
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

const VerifyResult = () => {
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [queryParameters] = useSearchParams();
  const code = queryParameters.get('code');
  const token = String(code);

  useEffect(() => {
    async function verifyUser(): Promise<void> {
      try {
        const { status } = await updateUserVerify(token);
        if (status === 200) {
          setResult('succeed');
          setMessage(
            'Congratulation, you already activated your account and feel free to explore Gamera now'
          );
        }
      } catch {
        setResult('failed');
        setMessage('Account already registered or link expired, please try again');
      }
    }
    verifyUser();
  }, []);

  if (!token) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <EmailVerifyContainer>
      <InfoContainer>
        <h2> Activate Account {result}</h2>
        <p>{message}</p>
      </InfoContainer>
    </EmailVerifyContainer>
  );
};

export default VerifyResult;
