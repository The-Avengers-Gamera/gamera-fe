import React, { useState } from 'react';
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

const AlarmLabel = styled.label`
  height: 1.6rem;
  background: rgba(107, 214, 7, 0.2);
  border-radius: 4px;
  opacity: 1;
  color: green;
  font-size: 0.3rem;
  padding-left: 1rem;
`;

type Props = {
  type: string;
  name: string;
  // eslint-disable-next-line no-unused-vars
  setParameter: (state: any) => void;
};

const ValidatedInputs: React.FC<Props> = (props: Props) => {
  const inputsDom: React.RefObject<HTMLInputElement> = React.createRef();
  const alarmLabelDom: React.RefObject<HTMLLabelElement> = React.createRef();
  const { type, name, setParameter } = props;
  const [visibility, setVisibility] = useState(false);

  const reverseAlarmLabelDisplay = () => {
    const inputDomObject = inputsDom.current!;
    setVisibility(inputDomObject.value === '');
  };

  return (
    <ValidatedInputsContainer>
      <span>{type}</span>
      <Inputs
        ref={inputsDom}
        id={type}
        type={type}
        onBlur={reverseAlarmLabelDisplay}
        required
        name={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setParameter(event.target.value);
        }}
      />
      {visibility && (
        <AlarmLabel ref={alarmLabelDom} htmlFor={type}>
          {type} is required
        </AlarmLabel>
      )}
    </ValidatedInputsContainer>
  );
};

export default ValidatedInputs;
