import { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { IDropdownFilterItem } from '@/interfaces/dropdown';

const DropdownWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  height: 45px;
  width: 185px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: ${({ theme }) => theme.color.bg_secondary};
  padding: 8px 16px;
  appearance: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;

  :hover {
    background-color: ${({ theme }) => theme.color.primary}80;
  }
`;

interface MenuProps {
  width: number | undefined;
}
const Menu = styled.ul<MenuProps>`
  position: absolute;
  top: 48px;
  border-radius: 8px;

  padding: 8px 4px;
  width: ${(props) => props.width}px;
  background-color: ${({ theme }) => theme.color.bg_secondary};
`;

const MenuItem = styled.li`
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0;
  opacity: 0.6;

  color: #fff;
  padding: 0 16px;
  height: 32px;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary}40;
    border-radius: 4px;
    opacity: 1;
  }
`;

interface FilterProps {
  type: string;
  items: IDropdownFilterItem[];
  selected: IDropdownFilterItem;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}
const Filter = ({ type, items, selected, setSelected }: FilterProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name } = selected;
  const ref = useRef<HTMLButtonElement>(null);
  const [btnWidth, setBtnWidth] = useState<number | undefined>(100);

  useLayoutEffect(() => {
    setBtnWidth(ref.current?.offsetWidth);
  }, [ref.current]);

  const menuClose = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickItem = (index: number) => () => {
    setSelected((pre: { string: IDropdownFilterItem }) => ({ ...pre, [type]: items[index] }));
    menuClose();
  };

  return (
    <DropdownWrapper>
      <Button
        onClick={handleClick}
        ref={ref}
      >
        {name}
        <KeyboardArrowDownIcon />
      </Button>
      {isMenuOpen && (
        <Menu width={btnWidth}>
          {items.map((e, index) => (
            <MenuItem
              key={e.value}
              onClick={handleClickItem(index)}
            >
              {e.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </DropdownWrapper>
  );
};

export default Filter;
