import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ValidatedInputsContainer = styled.div`
  width: 20rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.input`
  height: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
  border-radius: 4px;
  border: 2px solid green;
  background-color: black;
  color: white;
`;

const AlarmLabel = styled.span`
  background: rgba(107, 214, 7, 0.2);
  border-radius: 4px;
  opacity: 1;
  color: green;
  font-size: 0.3rem;
  padding-left: 1rem;
`;

type Props = {
  name: string;
  // eslint-disable-next-line no-unused-vars
  setParameter: (state: any) => void;
  // eslint-disable-next-line no-unused-vars
  setParameterValid: (state: boolean) => void;
};

const ValidatedInputs: React.FC<Props> = (props: Props) => {
  const { name, setParameter, setParameterValid } = props;
  const [inputValue, setInputValue] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [regularExpression, setRegularExpression] = useState(/^[\s\S]*$/);
  const [formatPrompt, setFormatPrompt] = useState('');

  const regularExpressionController = (type: string) => {
    const passwordRegularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    const emailRegularExpression = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const generalRegularExpression = /^[\s\S]*$/;
    switch (type) {
      case 'email':
        return emailRegularExpression;
      case 'password':
        return passwordRegularExpression;
      default:
        return generalRegularExpression;
    }
  };

  const forMatPromptController = (type: string) => {
    const passwordFormatPrompt =
      'Password must contain at least 6 characters including lowercase characters, uppercase characters, and numbers';
    const emailFormatPrompt =
      'Sorry, the email address you entered is not valid. Please enter a valid email address.';
    switch (type) {
      case 'email':
        return emailFormatPrompt;
      case 'password':
        return passwordFormatPrompt;
      default:
        return '';
    }
  };

  useEffect(() => {
    setRegularExpression(regularExpressionController(name));
    setFormatPrompt(forMatPromptController(name));
  }, []);

  const nameUniqueCheck = (event: React.FocusEvent<HTMLInputElement>) => {
    axios
      .get(`https://mock.apifox.cn/m1/2262741-0-default/users/name/${event.target.value}`)
      .then((res) => {
        const isNameExist = res.status === 200;
        setParameterValid(!isNameExist);
        setVisibility(isNameExist);
        setAlarmMessage(event.target.value === '' ? 'Username required' : res.data.message);
      });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setParameter(event.target.value);
  };

  const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const alarmMes =
      // eslint-disable-next-line no-nested-ternary
      inputValue === ''
        ? `${event.target.name} required`
        : !inputValue.match(regularExpression)
        ? formatPrompt
        : '';
    const visibilityStatus = alarmMes !== '';
    setAlarmMessage(alarmMes);
    setVisibility(visibilityStatus);
    setParameterValid(!visibilityStatus);
  };

  return (
    <ValidatedInputsContainer>
      <span>{name.substring(0, 1).toLowerCase() + name.substring(1)}</span>
      <Inputs
        id={name}
        required
        name={name}
        onChange={inputChangeHandler}
        onBlur={name === 'username' ? nameUniqueCheck : inputBlurHandler}
      />
      <> {visibility && <AlarmLabel> {alarmMessage} </AlarmLabel>}</>
    </ValidatedInputsContainer>
  );
};

export default ValidatedInputs;
