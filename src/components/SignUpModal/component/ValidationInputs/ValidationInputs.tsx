import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { isSubmitContext } from '../RegisterForm/RegisterForm';

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
};

const ValidationInputs: React.FC<Props> = (props: Props) => {
  const { name, setParameter } = props;
  const [inputValue, setInputValue] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  const [labelvisibility, setLabelVisibility] = useState(false);
  const [regularExpression, setRegularExpression] = useState(/^[\s\S]*$/);
  const [formatPrompt, setFormatPrompt] = useState('');
  const isSubmit = useContext(isSubmitContext);

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

  const nameUniqueCheck = (event: React.FocusEvent<HTMLInputElement>) => {
    axios
      .get(`https://mock.apifox.cn/m1/2262741-0-default/users/name/${event.target.value}`)
      .then((res) => {
        const isNameExist = res.status === 200;
        setParameter((preState: any) => ({ ...preState, valid: !isNameExist }));
        setLabelVisibility(isNameExist);
        setAlarmMessage(event.target.value === '' ? 'Username required' : res.data.message);
      });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setParameter((preState: any) => ({ ...preState, value: event.target.value }));
  };

  const nullInputHandler = (capitalizedName: string) => `${capitalizedName} required`;

  const notNullInputHandler = () => {
    return !inputValue.match(regularExpression) ? formatPrompt : '';
  };

  const inputBlurHandler = () => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const alarmMes = inputValue === '' ? nullInputHandler(capitalizedName) : notNullInputHandler();
    const visibilityStatus = alarmMes !== '';
    setAlarmMessage(alarmMes);
    setLabelVisibility(visibilityStatus);
    setParameter((preState: any) => ({ ...preState, valid: !visibilityStatus }));
  };
  useEffect(() => {
    if (isSubmit) inputBlurHandler();
  }, [isSubmit]);
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
      <> {labelvisibility && <AlarmLabel> {alarmMessage} </AlarmLabel>}</>
    </ValidatedInputsContainer>
  );
};

export default ValidationInputs;
