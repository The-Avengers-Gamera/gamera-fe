import { useState, createContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ValidationInputs from '../ValidationInputs';
import useModal from '@/context/loginModal';

const RegisterFormContainer = styled.form`
  margin-top: 3%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
`;

const RigisterInputContainer = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const isSubmitContext = createContext({});

const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameInputValue.valid && emailInputValue.valid && passwordInputValue.valid) {
      await axios
        .post('https://mock.apifox.cn/m1/2262741-0-default/users/signup', {
          usernameInputValue,
          emailInputValue,
          passwordInputValue,
        })
        .then((res) => {
          if (res.status === 201) {
            changeModalToOpen(false);
          }
        });
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <RegisterFormContainer
      noValidate
      onSubmit={handleSubmit}
    >
      <isSubmitContext.Provider value={isSubmit}>
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
      </isSubmitContext.Provider>
      <ResisterButtonContainer>
        <ResisterButton type="submit">Create Account</ResisterButton>
      </ResisterButtonContainer>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
