import { useState } from 'react';
import styled from 'styled-components';
import ArticlesShowCase from '../Reusable_Components/ArticlesShowCase';
// import AllReviews from './components/AllReviews';
import PageTitle from './components/PageTitle';
import PopularReviews from './components/PopularReviews';

// css----------------------------------------------------
const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

// ! FIXME: mock data mimicing axios request ------------------------------------------------------------
type ReviewCardType = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};
const initialState: ReviewCardType[] = [];
const mockReviewItem = {
  coverUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  daysAndOverview: '6h ago - Optimized Prime.',
  game: 'The last of Us',
  author: 'LUKE REILLY',
  commNum: '36',
  likeNum: '64',
};
for (let i = 0; i < 4; ) {
  initialState.push(structuredClone(mockReviewItem));
  mockReviewItem.title = `The Last Of Us Part Review ${i + 1}`; // mock data: make title unique
  i += 1;
}
// ! --------------------------------------------------------------------------------------------------

// refactored review page using reusable component: ArticleShowCase
const ReviewPageV2 = () => {
  // states and hooks ---------------
  // 2 core states here
  const articleType = 'News'; // which is used to differentiate review page and news page
  const [platformSelected, setPlatformSelected] = useState('PS');
  const [selectedPlatformArticleList, setSelectedPlatformArticleList] = useState(initialState);

  // ! FIXME: mock data mimicing axios request when state: platformSelected is changed---------------------------
  // const res = getArticle();
  // useEffect(()=>{setSelectedPlatformArticleList(res)}, [res])

  // ! -----------------------------------------------------------------------------------------------------------
  // functions -----------------------

  // jsx------------------------------
  return (
    <PageContainer>
      <PageTitle />
      <PopularReviews />
      {/* TODO: ArticleShowCase importing states */}
      <ArticlesShowCase
        articleType={articleType}
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
        selectedPlatformArticleList={selectedPlatformArticleList}
        setSelectedPlatformArticleList={setSelectedPlatformArticleList}
      />
    </PageContainer>
  );
};

export default ReviewPageV2;
