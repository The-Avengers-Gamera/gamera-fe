import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';
import { ArticleESearchResult } from '@/interfaces/search';

const Result = styled.div`
  font-family: 'Alumni Sans';
  border-radius: 2px;
  padding-top: 8px;
`;

interface ResultDropDownProps {
  articleResult: ArticleESearchResult[];
  onModalClose: () => void;
}
const ResultDropDown = ({ articleResult, onModalClose }: ResultDropDownProps) => {
  return (
    <Result>
      {articleResult?.length > 0 &&
        articleResult.map((article) => (
          <ListItem
            key={article.id}
            article={article}
            onModalClose={onModalClose}
          />
        ))}
    </Result>
  );
};

export default ResultDropDown;
