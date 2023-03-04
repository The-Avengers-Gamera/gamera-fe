import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';
import NewsCard from './components/NewsCard';
import { IArticleCard } from '@/interfaces/article';
import { EArticleType } from '@/constants/article';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;

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
`;

type ShowCaseBodyProps = {
  articleType: string;
  selectedPlatformArticleList: IArticleCard[];
  setSelectedPlatformArticleList: React.Dispatch<React.SetStateAction<IArticleCard[]>>;
};
// componenet ==================================================================
const ShowCaseBody = ({
  articleType, // decide which card ( NewsCard or ReviewCard) should be rendered
  selectedPlatformArticleList,
  setSelectedPlatformArticleList,
}: ShowCaseBodyProps) => {
  // states and hooks -------------------------

  // functions --------------------------------
  //!  mock data for load more button ----------------------------------------------------------------------
  // ! TODO: replace mock data for load more button with loading articles on the next page
  const mockArticle: IArticleCard = {
    coverImgUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
    title: 'The Last Of Us Part 1 Review',
    date: '6h ago',
    description: 'Optimized Prime.',
    game: { id: '12', name: 'last of us' },
    author: { name: 'LUKE REILLY' },
    commentCount: 36,
    likeCount: 64,
  };

  const loadMoreArticles = () => {
    const addedArticles = [
      structuredClone(mockArticle),
      structuredClone(mockArticle),
      structuredClone(mockArticle),
    ];

    setSelectedPlatformArticleList([...selectedPlatformArticleList, ...addedArticles]);
  };
  // !--------------------------------------------------------------------------------------------------------

  // jsx ---------------------------------------

  return (
    <Container>
      {selectedPlatformArticleList.map((article: IArticleCard) => {
        const { coverImgUrl, title, date, description, author, commentCount, likeCount, game } =
          article;
        return articleType === EArticleType.NEWS ? (
          <NewsCard
            key={title}
            coverImgUrl={coverImgUrl}
            title={title}
            date={date}
            description={description}
            author={author}
            commentCount={commentCount}
            likeCount={likeCount}
            game={game}
          />
        ) : (
          <ReviewCard
            key={title}
            coverImgUrl={coverImgUrl}
            title={title}
            date={date}
            description={description}
            author={author}
            commentCount={commentCount}
            likeCount={likeCount}
            game={game}
          />
        );
      })}

      {/* load more button */}
      <div className="loadMore-container">
        <button
          type="button"
          className="loadMore-btn"
          onClick={loadMoreArticles}
        >
          Load more
        </button>
      </div>
    </Container>
  );
};

export default ShowCaseBody;
