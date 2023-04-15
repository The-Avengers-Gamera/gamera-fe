import { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ValidationInputs from '../ValidationInputs';
import useModal from '@/context/loginModal';
import { createUser } from '@/services/user';
import { IUserSignUp } from '@/interfaces/user';

const RegisterFormContainer = styled.form`
  margin-top: 3%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
`;

const ResisterButtonContainer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResisterButton = styled.button`
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

const RegisterForm = () => {
  const { changeModalToOpen } = useModal();
  const [usernameInputValue, setUserNameInputValue] = useState({
    value: '',
    valid: false,
  });
  const [emailInputValue, setEmailInputValue] = useState({
    value: '',
    valid: false,
  });
  const [passwordInputValue, setPasswordInputValue] = useState({
    value: '',
    valid: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInputValue.valid && emailInputValue.valid && passwordInputValue.valid) {
      const user: IUserSignUp = {
        name: usernameInputValue.value,
        email: emailInputValue.value,
        password: passwordInputValue.value,
      };
      createUser(user).then((res) => {
        if (res.status === 200) {
          changeModalToOpen(false);
          navigate('/activate-email');
        }
      });
    }
  };

  return (
    <RegisterFormContainer
      noValidate
      onSubmit={handleSubmit}
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
      <ResisterButtonContainer>
        <ResisterButton type="submit">Create Account</ResisterButton>
      </ResisterButtonContainer>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
