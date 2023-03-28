import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';
import NewsCard from './components/NewsCard';
import { IArticleCard } from '@/interfaces/article';
import { ArticleType } from '@/constants/article';
import { nowToCreated } from '@/utils/time';
import LoadMore from '@/components/LoadMore';

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
  articleType: ArticleType;
  filteredArticle: IArticleCard[] | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const ShowCaseBody = ({ articleType, filteredArticle, setCurrentPage }: ShowCaseBodyProps) => {
  return (
    <Container>
      {filteredArticle?.map((article: IArticleCard) => {
        const { createdTime } = article;
        const date = nowToCreated(createdTime);
        return articleType === ArticleType.NEWS ? (
          <NewsCard
            key={article.id}
            article={{ ...article, date }}
          />
        ) : (
          <ReviewCard
            key={article.id}
            article={{ ...article, date }}
          />
        );
      })}

      {/* load more button, this should lift up */}
      <div className="loadMore-container">
        <LoadMore setCurrentPage={setCurrentPage} />
      </div>
    </Container>
  );
};

export default ShowCaseBody;
