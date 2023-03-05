import styled from 'styled-components';
import ShowCaseBody from './components/ShowCaseBody';
// import ReviewCards from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';
import { IArticleCard } from '@/interfaces/article';
import { EArticleType } from '@/constants/article';

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
  articleType: string;
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedPlatformArticleList: IArticleCard[];
  setSelectedPlatformArticleList: React.Dispatch<React.SetStateAction<IArticleCard[]>>;
};

// =========================================================================================================================
// an abstract component that could be reused to generate 'All reviews' section in review page and 'latest news' in news page
const ArticlesShowCase = ({
  articleType, // "News" or "Reviews"
  platformSelected,
  setPlatformSelected,
  selectedPlatformArticleList,
  setSelectedPlatformArticleList,
}: ArticleShowCaseProps) => {
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
        selectedPlatformArticleList={selectedPlatformArticleList}
        setSelectedPlatformArticleList={setSelectedPlatformArticleList}
      />
    </Container>
  );
};

export default ArticlesShowCase;
