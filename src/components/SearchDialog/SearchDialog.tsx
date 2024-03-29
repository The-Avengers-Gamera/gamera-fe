import { useCallback, useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import SearchRoundedIcon from '@mui/icons-material/SearchOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useLockScroll from '@/hooks/useLockScroll';
import Input from './components/Input';
import ResultDropDown from './components/ResultDropDown';
import { searchArticleByKeyword } from '@/services/search';
import { ArticleESearchResult } from '@/interfaces/search';

const SearchWindow = styled.div`
  width: 500px;
  max-height: 74vh;
  min-height: 74vh;
  background-color: ${({ theme }) => theme.color.bg_secondary};
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const SearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
  }
`;

const EmptyDiv = styled.div`
  width: 24px;
  height: 0;
`;

const CloseButton = styled.button`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  width: 24px;
  height: 24px;
  background-color: inherit;
  outline: 0;
  border: 0;
`;

const SearchWrapper = styled.div`
  position: relative;
  height: 48px;
`;

const SearchIcon = styled(SearchRoundedIcon)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translate(0, -50%);
  color: #fff;
`;

const ResultWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: hidden auto;
`;

interface SearchDialogProps {
  onModalClose: () => void;
}
const SearchDialog = ({ onModalClose }: SearchDialogProps) => {
  useLockScroll();

  const [searchText, setSearchText] = useState<string>('');
  const [articleResults, setArticleResults] = useState<ArticleESearchResult[]>([]);

  const fetchData = async (keyword: string) => {
    const { data } = await searchArticleByKeyword(keyword);
    setArticleResults(data || []);
  };

  const debouncedFetchData = useCallback(debounce(fetchData, 800), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    debouncedFetchData(e.target.value);
  };

  return (
    <SearchWindow>
      <SearchTitle>
        <EmptyDiv />
        <h2>SEARCH</h2>
        <CloseButton
          type="button"
          onClick={onModalClose}
        >
          <CloseRoundedIcon />
        </CloseButton>
      </SearchTitle>
      <SearchWrapper>
        <SearchIcon sx={{ fontSize: 32 }} />
        <Input
          type="text"
          placeholder="Search Articles"
          value={searchText}
          onChange={handleChange}
        />
      </SearchWrapper>
      <ResultWrapper>
        <ResultDropDown
          articleResult={articleResults}
          onModalClose={onModalClose}
        />
      </ResultWrapper>
    </SearchWindow>
  );
};

export default SearchDialog;
