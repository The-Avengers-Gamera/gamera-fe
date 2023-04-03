import styled from 'styled-components';
import { useEffect, useState } from 'react';
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

const EmailActivate = () => {
  const [result, setResult] = useState('failed');
  const [res, setRes] = useState('');
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get('code');
  const token = String(code);
  useEffect(() => {
    async function verifyUser(): Promise<void> {
      try {
        const { data, status } = await updateUserVerify(token);
        if (status === 200) {
          setResult('succeed');
          setRes(data);
        }
      } catch ({ response }) {
        setRes('Account already registered or link expired, please try again');
      }
    }
    verifyUser();
  }, []);

  return (
    <EmailVerifyContainer>
      <InfoContainer>
        <h2> Activate Account {result}</h2>
        <p>{res}</p>
      </InfoContainer>
    </EmailVerifyContainer>
  );
};

export default EmailActivate;
