import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ShowCaseBody from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';
import LoadMore from '@/components/LoadMore';
import { IArticleQuery, SearchGenre } from '@/interfaces/search';
import { IArticleCard } from '@/interfaces/article';
import { ArticleType, Platform, ReviewOrder, ReviewSort } from '@/constants/article';
import { getArticles } from '@/services/article';
import { SortBarDate, SortBarGenre } from '@/constants/dropdown';
import { SortItem, SortType } from '../Shares/SortBars/SortBars';

const Container = styled.div`
  // border: 1px solid #fff;

  padding: 45px 45px;

  & h2 {
    font-family: 'Alumni Sans';
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0em;
  }
  & .loadMore-container {
    display: flex;
    justify-content: center;

    width: 960px;

    padding-bottom: 25px;

    & .loadMore-btn {
      margin-top: 30px;

      width: 130px;
      height: 45px;
      //padding: 8px 16px;
      border-radius: 8px;

      font-family: Poppins;
      font-size: 18px;
      font-weight: 600;

      border: none;

      background-color: ${({ theme }) => theme.color.primary};
      color: #3d3d3d; // TODO: manage the color using theme instead

      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    & .loadMore-container {
      width: 100%;
    }
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
  const [filteredArticleList, setFilteredArticleList] = useState<IArticleCard[]>([]);
  const [isAtTheEnd, setIsAtTheEnd] = useState(false);

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

  useEffect(() => {
    setFilteredArticleList((preState) => [...preState, ...(filteredArticle ?? [])]);
  }, [filteredArticle]);

  const getSortFromSelected = {
    [SortBarDate.Latest]: { sort: ReviewSort.CREATED_TIME, order: ReviewOrder.DESC },
    [SortBarDate.Oldest]: { sort: ReviewSort.CREATED_TIME, order: ReviewOrder.ASC },
    [SortBarDate.Score]: { sort: ReviewSort.SCORES, order: ReviewOrder.DESC },
    [SortBarDate.Title]: { sort: ReviewSort.TITLE, order: ReviewOrder.ASC },
  };

  const clearArticleListAndReSetCurrentPage = () => {
    setFilteredArticleList([]);
    setCurrentPage(1);
  };

  const handlePlatformChange = (value: Platform) => {
    clearArticleListAndReSetCurrentPage();
    setFilters((pre) => ({ ...pre, platform: value }));
  };

  const handleSortChange = (type: SortType, item: SortItem) => {
    clearArticleListAndReSetCurrentPage();
    if (type === 'sort') {
      const { sort, order } = getSortFromSelected[item as SortBarDate];
      setFilters((pre) => ({ ...pre, sort, order }));
    }

    if (type === 'genre') {
      const genre = item.toLowerCase() as SearchGenre;
      setFilters((pre) => ({ ...pre, genre }));
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
        onPlatformSelected={handlePlatformChange}
        onSortChange={handleSortChange}
      />
      <ShowCaseBody
        articleType={articleType}
        filteredArticle={filteredArticleList}
      />
      <div className="loadMore-container">
        {!isAtTheEnd && (
          <LoadMore
            setCurrentPage={setCurrentPage}
            currentPage={data?.currentPage ?? 0}
            totalPages={data?.totalPages ?? 0}
            setIsAtTheEnd={setIsAtTheEnd}
          />
        )}
      </div>
    </Container>
  );
};

export default ArticlesShowCase;
