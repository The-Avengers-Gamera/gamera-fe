import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ShowCaseBody from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';
import { ISearchArticle, SearchPlatform } from '@/interfaces/search';
import { EArticleType } from '@/constants/article';
import { getArticles } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';

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
  articleType: EArticleType;
};

const initFilters: ISearchArticle = { page: 1, size: 20, platform: 'all' };

const ArticlesShowCase = ({
  articleType, // "News" or "Reviews"
}: ArticleShowCaseProps) => {
  const queryType = articleType === EArticleType.NEWS ? 'news' : 'reviews';

  // TODO click filter button to setFilters
  const [filters, setFilters] = useState(initFilters);
  const [platformSelected, setPlatformSelected] = useState<Platform>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticle, setFilteredArticle] = useState<IArticleCard[]>([]);
  // const [pageArticle, setPageArticle] = useState<IArticleCard[]>([]);

  // TODO implement infiniteQuery next step
  const { isLoading, error, data } = useQuery({
    queryKey: [queryType, filters],
    queryFn: async () => getArticles(queryType, filters),
    onSuccess: (pageArticleData) =>
      setFilteredArticle((preState) => [...preState, ...pageArticleData.data]),
  });

  useEffect(() => {
    setFilters((pre) => ({
      ...pre,
      page: currentPage,
      platform: platformSelected.toLowerCase() as SearchPlatform,
    }));
  }, [platformSelected, currentPage]);

  // TODO implement loading component
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h2>{articleType === EArticleType.NEWS ? 'Latest News' : 'All Reviews'}</h2>
      <SelectionBars
        articleType={articleType}
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
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
