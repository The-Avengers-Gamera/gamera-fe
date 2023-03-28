import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmailExists } from '@/services/user';

const ValidatedInputsContainer = styled.div`
  width: 20rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.input`
  height: 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
  border-radius: 4px;
  border: 2px solid green;
  background-color: rgba(36, 36, 41, 1); /* Black w/ opacity */
  color: white;
  border-radius: 8px;
`;

const AlarmLabel = styled.div`
  float: right;
  background: rgba(107, 214, 7, 0.2);
  border-radius: 4px;
  opacity: 1;
  color: green;
  font-size: 1rem;
  padding-left: 0.5rem;
`;

type Props = {
  name: string;
  setParameter: React.Dispatch<
    React.SetStateAction<{
      value: string;
      valid: boolean;
    }>
  >;
};

const ValidationInputs: React.FC<Props> = (props: Props) => {
  const { name, setParameter } = props;
  const [inputValue, setInputValue] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  const [labelVisibility, setLabelVisibility] = useState(false);
  const [regularExpression, setRegularExpression] = useState(/^[\s\S]*$/);
  const [formatPrompt, setFormatPrompt] = useState('');

  const regularExpressionController = (type: string) => {
    switch (type) {
      case 'email':
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      case 'password':
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
      default:
        return /^[\s\S]*$/;
    }
  };

  const forMatPromptController = (type: string) => {
    switch (type) {
      case 'email':
        return 'Sorry, the email address you entered is not valid. Please enter a valid email address.';
      case 'password':
        return 'Password must contain at least 6 characters including lowercase characters, uppercase characters, and numbers';
      default:
        return '';
    }
  };

  useEffect(() => {
    setRegularExpression(regularExpressionController(name));
    setFormatPrompt(forMatPromptController(name));
  }, []);

  const showAlarm = (alarmMes: string) => {
    setAlarmMessage(alarmMes);
    setLabelVisibility(true);
    setParameter({ value: inputValue, valid: false });
  };

  const emailUniqueCheck = async (event: React.FocusEvent<HTMLInputElement>) => {
    const emailAddress = event.target.value;
    getEmailExists(emailAddress)
      .then(() => {
        setParameter({ value: inputValue, valid: true });
      })
      .catch(() => {
        showAlarm('Email already exist!');
      });
  };

  const nullInputHandler = () => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    showAlarm(`${capitalizedName} required`);
  };

  const notNullInputHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!inputValue.match(regularExpression)) {
      showAlarm(formatPrompt);
      return;
    }
    if (name === 'email') {
      emailUniqueCheck(event);
      return;
    }
    setParameter(() => ({ value: inputValue, valid: true }));
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelVisibility(false);
    setInputValue(event.target.value);
  };

  return (
    <ValidatedInputsContainer>
      <span>{name.substring(0, 1).toUpperCase() + name.substring(1)}</span>
      <Inputs
        id={name}
        required
        name={name}
        onChange={inputChangeHandler}
        onBlur={inputValue === '' ? nullInputHandler : notNullInputHandler}
        autoComplete="off"
        type={name}
      />
      <> {labelVisibility && <AlarmLabel> {alarmMessage} </AlarmLabel>}</>
    </ValidatedInputsContainer>
  );
};

export default ValidationInputs;
