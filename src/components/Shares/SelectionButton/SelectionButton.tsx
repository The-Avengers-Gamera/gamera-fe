import styled from 'styled-components';
import { Platform } from '@/constants/article';

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
    font-weight: 600;

    background-color: #222430; // TODO: manage the color using theme
    color: #ffffff; // TODO: manage the color using theme
  }

  & .highlight {
    // light up button
    background-color: ${({ theme }) => theme.color.primary};
    color: #3d3d3d; // TODO: manage the color using theme
  }
  @media screen and (max-width: 768px) {
    & .btn {
      width: 95px;
      height: 30px;
      font-size: 14px;
    }
    @media screen and (max-width: 568px) {
      & .btn {
        margin-bottom:5px;
        height: 20px;
        width: 50vw;

      }
  }
`;

interface SelectionButtonProps {
  platformSelected: Platform;
  onPlatformChange: (platform: Platform) => void;
  currentPlatform: Platform;
}

const SelectionButton = ({
  platformSelected,
  onPlatformChange,
  currentPlatform,
}: SelectionButtonProps) => {
  const platformKey = Object.keys(Platform)[Object.values(Platform).indexOf(currentPlatform)];

  const handleClick = () => {
    if (currentPlatform === platformSelected) {
      return;
    }
    onPlatformChange(currentPlatform);
  };

  return (
    <ButtonContainer>
      <button
        className={currentPlatform === platformSelected ? 'btn highlight' : 'btn'}
        type="button"
        onClick={handleClick}
      >
        {platformKey}
      </button>
    </ButtonContainer>
  );
};

export default SelectionButton;
