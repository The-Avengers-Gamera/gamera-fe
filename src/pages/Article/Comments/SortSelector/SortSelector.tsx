import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';

const Container = styled.div`
  position: relative;
  .expend-btn {
    color: ${({ theme }) => theme.color.primary};
    font-size: 18px;
    background-color: transparent;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
  }
  .selection-list {
    position: absolute;
    background-color: #212121;
    width: 200px;
    border-radius: 4px;
    top: 35px;
    padding: 0;
    overflow: hidden;
    display: none;
    &.expended {
      display: block;
    }
    li {
      padding: 0px 20px;
      height: 50px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .selected-icon {
        display: none;
      }

      &.active {
        .selected-icon {
          display: inline;
        }
      }
    }

    li:hover {
      background-color: #4a4a4a;
    }
  }
`;

enum SortType {
  Best = 'Best',
  Newest = 'Newest',
  Oldest = 'Oldest',
}

const SortSelector = () => {
  const [sortType, setSortType] = useState<SortType>(SortType.Best);
  const [expended, setExpended] = useState<boolean>(false);

  const expendBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (expendBtnRef.current && !expendBtnRef.current.contains(e.target as Node)) {
        setExpended(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [expendBtnRef]);

  const selectType = (type: string) => {
    if (type === 'Best') {
      setSortType(SortType.Best);
    }
    if (type === 'Newest') {
      setSortType(SortType.Newest);
    }
    if (type === 'Oldest') {
      setSortType(SortType.Oldest);
    }
  };

  const expandClickHandler = () => {
    setExpended(!expended);
  };
  return (
    <Container>
      <button
        ref={expendBtnRef}
        type="button"
        className="expend-btn"
        onClick={() => expandClickHandler()}
      >
        {sortType} <KeyboardArrowDownIcon />
      </button>
      <ul className={`selection-list ${expended ? 'expended' : ''}`}>
        {Object.values(SortType).map((type) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            className={sortType === type ? 'active' : ''}
            onClick={() => {
              selectType(type);
            }}
            onKeyDown={() => {
              selectType(type);
            }}
            key={type}
          >
            {type} <DoneIcon className="selected-icon" />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SortSelector;
