import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  color: #fff;
  font-size: 1rem;
  border: 1px solid #fff;
  outline: 0;
  background-color: ${({ theme }) => theme.color.bg_secondary};
  padding: 16px;
  padding-left: 60px;
  border-radius: 6px;

  :focus {
    border: ${({ theme }) => theme.color.primary} solid 1px;
  }

  ::placeholder {
    color: #fff;
    opacity: 1;
  }
`;

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, value, placeholder, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
