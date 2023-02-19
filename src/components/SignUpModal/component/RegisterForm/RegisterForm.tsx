import React, { useState } from 'react';
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
  const [usernameInputValue, setUserNameInputValue] = useState({ value: '', valid: false });
  const [emailInputValue, setEmailInputValue] = useState({ value: '', valid: false });
  const [passwordInputValue, setPasswordInputValue] = useState({ value: '', valid: false });

  const submitionHandler = (e: React.FormEvent<HTMLFormElement>, fun: any) => {
    e.preventDefault();
    if (usernameInputValue.valid && emailInputValue.valid && passwordInputValue.valid) {
      axios
        .post('https://mock.apifox.cn/m1/2262741-0-default/users/signup', {
          usernameInputValue,
          emailInputValue,
          passwordInputValue,
        })
        .then((res) => {
          if (res.status === 201) {
            fun(false);
          }
        });
    }
  };

  return (
    <RootContext.Consumer>
      {(value) => (
        <RegisterFormContainer
          onSubmit={(event) => {
            submitionHandler(event, value.changeModalToOpen);
          }}
        >
          <ValidationInputs
            name="username"
            setParameter={setUserNameInputValue}
          />
          <ValidationInputs
            name="email"
            setParameter={setEmailInputValue}
          />
          <ValidationInputs
            name="password"
            setParameter={setPasswordInputValue}
          />
          <ResisterButton type="submit">Create Account</ResisterButton>
        </RegisterFormContainer>
      )}
    </RootContext.Consumer>
  );
};

export default RegisterForm;
