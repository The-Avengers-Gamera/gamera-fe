import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import styled from 'styled-components';
import ValidatedInputs from '../ValidatedInputs';

const RegisterFormContainer = styled.form`
  margin-top: 1rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResisterButton = styled.button`
  width: 12rem;
  height: 9rem;
  margin-top: 1.5rem;
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

const RegisterForm = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('https://mock.apifox.cn/m1/2262741-0-default/users/signup', {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error: JSON) => {
        console.log(error);
      });
  };

  return (
    <RegisterFormContainer onSubmit={submitionHandler}>
      <ValidatedInputs type="Username" name="username" setParameter={setUserName} />
      <ValidatedInputs type="Email" name="email" setParameter={setEmail} />
      <ValidatedInputs type="Password" name="password" setParameter={setPassword} />
      <ResisterButton type="submit">Create Account</ResisterButton>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
