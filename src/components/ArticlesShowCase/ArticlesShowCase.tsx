import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ShowCaseBody from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';
import { ISearchArticle, SearchPlatform } from '@/interfaces/search';
import { EArticleType } from '@/constants/article';
import { getArticles } from '@/services/article';

const Container = styled.div`
  // border: 1px solid #fff;

  padding: 45px 84px 0%;

  & h2 {
    font-family: Gen Jyuu Gothic Monospace;
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

  // TODO implement infiniteQuery next step
  const {
    isLoading,
    error,
    data: pageArticle,
  } = useQuery({
    queryKey: [queryType, filters],
    queryFn: async () => getArticles(queryType, filters),
  });

  const filteredArticle = pageArticle?.data;

  useEffect(() => {
    setFilters((pre) => ({ ...pre, platform: platformSelected.toLowerCase() as SearchPlatform }));
  }, [platformSelected]);

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
      />
    </Container>
  );
};

export default ArticlesShowCase;
