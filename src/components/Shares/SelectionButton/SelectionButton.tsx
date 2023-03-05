import styled from 'styled-components';

import { ReactNode } from 'react';

const ButtonContainer = styled.div`
  margin-right: 10px;

  & .btn {
    width: 130px;
    height: 45px;
    padding: 8px 2px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;

    cursor: pointer;

    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;

    background-color: #222430; // TODO: manage the color using theme
    color: #ffffff; // TODO: manage the color using theme
  }

  & .highlight {
    // light up button
    background-color: ${({ theme }) => theme.color.primary};
    color: #3d3d3d; // TODO: manage the color using theme
  }
`;

interface SelectionButtonProps {
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
  platformName: string;
}

// this component represents a styled button in tool bar ===================================
const SelectionButton = ({
  platformSelected,
  setPlatformSelected,
  platformName,
}: SelectionButtonProps) => {
  // functions --------------------------------------
  const handleClick = () => {
    setPlatformSelected(platformName);
  };
  // jsx -------------------------------------------
  // return <StyledButton>{children}</StyledButton>;
  return (
    <ButtonContainer>
      <button
        className={platformSelected === platformName ? 'btn highlight' : 'btn'}
        type="button"
        onClick={handleClick}
      >
        {platformName}
      </button>
    </ButtonContainer>
  );
};

export default SelectionButton;
