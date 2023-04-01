import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { sendActivateLink, updateUserVerify } from '@/services/user';

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

const EmailActivate = () => {
  const [result, setResult] = useState(false);
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get('code');
  // const { code } = useParams();
  const token = String(code);
  // const handleClick = () => {
  //   sendActivateLink(id).then((res) => {
  //     if (res.status === 200) {

  //     })
  // };
  console.log(token);
  useEffect(() => {
    async function verifyUser(): Promise<void> {
      try {
        const { status } = await updateUserVerify(token);
        if (status === 200) {
          setResult(true);
        }
      } catch ({ response }) {
        <EmailVerifyContainer>
          <InfoContainer>
            <h2> Activate failed, please try again</h2>
            <ActiveButtonContainer>
              <ActiveButton>Resend active link</ActiveButton>
            </ActiveButtonContainer>
          </InfoContainer>
        </EmailVerifyContainer>;
      }
    }
    verifyUser();
  }, []);

  return (
    result && (
      <EmailVerifyContainer>
        <InfoContainer>
          <h2> Successfully activate Account</h2>
          <p>Congratulation, you already activate your account and can explore Gamera now</p>
        </InfoContainer>
      </EmailVerifyContainer>
    )
  );
};

export default EmailActivate;
