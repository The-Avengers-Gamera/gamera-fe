import styled from 'styled-components';
import ShowCaseBody from './components/ShowCaseBody';
// import ReviewCards from './components/ShowCaseBody';
import SelectionBars from './components/SelectionBars';

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

type ReviewCardType = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};

type ArticleShowCaseProps = {
  articleType: string;
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedPlatformArticleList: ReviewCardType[];
  setSelectedPlatformArticleList: React.Dispatch<React.SetStateAction<ReviewCardType[]>>;
};

// an abstract component that could be reused to generate 'All reviews' section in review page
// and 'latest news' in news page
const ArticlesShowCase = ({
  articleType, // "News" or "Reviews"
  platformSelected,
  setPlatformSelected,
  selectedPlatformArticleList,
  setSelectedPlatformArticleList,
}: ArticleShowCaseProps) => {
  return (
    <Container>
      <h2>All Reveiws</h2>
      <SelectionBars
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
      />
      <ShowCaseBody
        selectedPlatformArticleList={selectedPlatformArticleList}
        setSelectedPlatformArticleList={setSelectedPlatformArticleList}
      />
    </Container>
  );
};

export default ArticlesShowCase;
