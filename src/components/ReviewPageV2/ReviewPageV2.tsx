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

// ! TODO: mock data mimicing axios request ------------------------------------------------------------
// type ReviewCardType = {
//   coverUrl: string;
//   title: string;
//   daysAndOverview: string;
//   game: string;
//   author: string;
//   commNum: string;
//   likeNum: string;
// };
type ArticleFormat = {
  coverUrl: string;
  title: string;
  date: string;
  subtitle: string;
  author: string;
  likeCount: number;
  commentCount: number;
  game?: {
    id: string;
    name: string;
  };
};
const initialState: ArticleFormat[] = [];
const mockReviewItem: ArticleFormat = {
  coverUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  date: '6h ago ',
  subtitle: 'Optimized Prime.',
  author: 'LUKE REILLY',
  commentCount: 36,
  likeCount: 64,
  game: { id: '32', name: 'last of us' },
};
for (let i = 0; i < 4; ) {
  initialState.push(structuredClone(mockReviewItem));
  mockReviewItem.title = `The Last Of Us Part Review ${i + 1}`; // mock data: make title unique
  i += 1;
}
// ! --------------------------------------------------------------------------------------------------

// refactored review page using reusable component: ArticleShowCase ==================================================
const ReviewPageV2 = () => {
  // states and hooks ---------------
  // 2 core states here
  const articleType = 'Reviews'; // which is used to differentiate review page and news page

  const [platformSelected, setPlatformSelected] = useState('All');
  const [selectedPlatformArticleList, setSelectedPlatformArticleList] = useState(initialState);

  // ! TODO: replace mock data with axios request when state: platformSelected is changed---------------------------
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
