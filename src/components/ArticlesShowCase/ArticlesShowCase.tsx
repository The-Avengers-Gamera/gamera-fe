import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ShowCaseBody from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';
import { IArticleQuery, SearchGenre } from '@/interfaces/search';
import { ArticleType, Platform, ReviewOrder, ReviewSort } from '@/constants/article';
import { getArticles } from '@/services/article';
import { SortBarDate, SortBarGenre } from '@/constants/dropdown';
import { SortItem, SortType } from '../Shares/SortBars/SortBars';

const Container = styled.div`
  // border: 1px solid #fff;

  padding: 45px 84px 0%;

  & h2 {
    font-family: 'Alumni Sans';
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0em;
  }
`;

type ArticleShowCaseProps = {
  articleType: ArticleType;
};

const initFilters: IArticleQuery = {
  page: 1,
  size: 20,
  platform: Platform.All,
  genre: SortBarGenre.All.toLowerCase() as SearchGenre,
  sort: ReviewSort.CREATED_TIME,
  order: ReviewOrder.DESC,
};

const ArticlesShowCase = ({ articleType }: ArticleShowCaseProps) => {
  const [filters, setFilters] = useState(initFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data } = useQuery({
    queryKey: [articleType, filters],
    queryFn: async () => getArticles(articleType, filters),
  });

  const filteredArticle = data?.data;

  useEffect(() => {
    setFilters((pre) => ({
      ...pre,
      page: currentPage,
    }));
  }, [currentPage]);

  const getSortFromSelected = {
    [SortBarDate.Latest]: { sort: ReviewSort.CREATED_TIME, order: ReviewOrder.DESC },
    [SortBarDate.Oldest]: { sort: ReviewSort.CREATED_TIME, order: ReviewOrder.ASC },
    [SortBarDate.Score]: { sort: ReviewSort.SCORES, order: ReviewOrder.DESC },
    [SortBarDate.Title]: { sort: ReviewSort.TITLE, order: ReviewOrder.ASC },
  };

  const handlePlatformSelected = (value: Platform) => {
    setFilters((pre) => ({ ...pre, platform: value }));
  };

  const handleSortChange = (type: SortType, item: SortItem) => {
    if (type === 'sort') {
      const res = getSortFromSelected[item as SortBarDate];
      setFilters((pre) => ({ ...pre, sort: res.sort, order: res.order }));
    }

    if (type === 'genre') {
      const res = item as SortBarGenre;
      setFilters((pre) => ({ ...pre, genre: res.toLowerCase() as SearchGenre }));
    }
  };

  // TODO implement loading component
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h2>{articleType === ArticleType.NEWS ? 'Latest News' : 'All Reviews'}</h2>
      <SelectionBars
        articleType={articleType}
        barsSelected={filters}
        onPlatformSelected={handlePlatformSelected}
        onSortChange={handleSortChange}
      />
      <ShowCaseBody
        articleType={articleType}
        filteredArticle={filteredArticle}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default ArticlesShowCase;
