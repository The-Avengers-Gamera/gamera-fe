import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from '../../../Shares/SortBars';
import { ArticleType, Platform } from '@/constants/article';
import { IArticleQuery } from '@/interfaces/search';
import { SortBarDate, SortBarGenre } from '@/constants/dropdown';
import { SortType } from '@/components/Shares/SortBars/SortBars';

const Container = styled.div`
  // border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

type SelectionBarsProps = {
  articleType: ArticleType;
  barsSelected: IArticleQuery;
  onPlatformSelected: (platform: Platform) => void;
  onSortChange: (type: SortType, sort: SortBarDate | SortBarGenre) => void;
};

const SelectionBars = ({
  articleType,
  barsSelected,
  onPlatformSelected,
  onSortChange,
}: SelectionBarsProps) => {
  const platformSelected = barsSelected.platform;

  return (
    <Container>
      <PlatformBars
        platformSelected={platformSelected}
        onPlatformSelected={onPlatformSelected}
      />
      {articleType === ArticleType.REVIEWS && (
        <SortBars
          sort={barsSelected.sort}
          order={barsSelected.order}
          genre={barsSelected.genre}
          onSortChange={onSortChange}
        />
      )}
    </Container>
  );
};

export default SelectionBars;
