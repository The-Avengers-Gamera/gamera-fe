import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useEffect, useRef } from 'react';
import { useToggleWhenClickOutside } from '@/hooks/useToggleWhenClickOutside';

const Button = styled.button`
  padding-bottom: 1.4rem;
  color: black;
  background-color: ${({ theme }) => theme.color.primary};
  position: absolute;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

interface NavExpandButtonProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (isNavExpanded: boolean) => void;
  expendNavMoreRef: React.RefObject<HTMLDivElement>;
}

const NavExpandButton = ({
  isNavExpanded,
  setIsNavExpanded,
  expendNavMoreRef,
}: NavExpandButtonProps) => {
  const expendNavRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useToggleWhenClickOutside(expendNavRef, false, [
    expendNavMoreRef,
  ]);

  useEffect(() => {
    setIsNavExpanded(isExpanded);
  }, [isExpanded]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Button
      ref={expendNavRef}
      onClick={handleClick}
    >
      {!isNavExpanded && <ArrowRightIcon sx={{ fontSize: 40 }} />}
      {isNavExpanded && <ArrowLeftIcon sx={{ fontSize: 40 }} />}
    </Button>
  );
};

export default NavExpandButton;
