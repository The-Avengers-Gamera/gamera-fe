/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import styled from 'styled-components';
import ValidationInputs from '../ValidationInputs';
import { RootContext } from '@/layouts/Root';

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

const RegisterForm: React.FC = () => {
  const [usernameInputValue, setUserNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [usernameInputValid, setUserNameInputValid] = useState(false);
  const [emailInputValid, setEmailInputValid] = useState(false);
  const [passwordInputValid, setPasswordInputValid] = useState(false);

  const submitionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInputValid && emailInputValid && passwordInputValid) {
      axios
        .post('https://mock.apifox.cn/m1/2262741-0-default/users/signup', {
          usernameInputValue,
          emailInputValue,
          passwordInputValue,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <RegisterFormContainer onSubmit={submitionHandler}>
      <ValidationInputs
        name="username"
        setParameter={setUserNameInputValue}
        setParameterValid={setUserNameInputValid}
      />
      <ValidationInputs
        name="email"
        setParameter={setEmailInputValue}
        setParameterValid={setEmailInputValid}
      />
      <ValidationInputs
        name="password"
        setParameter={setPasswordInputValue}
        setParameterValid={setPasswordInputValid}
      />
      <RootContext.Consumer>
        {(value) => {
          return <ResisterButton type="submit">Create Account</ResisterButton>;
        }}
      </RootContext.Consumer>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
