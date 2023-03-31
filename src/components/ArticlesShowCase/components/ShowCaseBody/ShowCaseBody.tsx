import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReviewCard from './components/ReviewCard';
import NewsCard from './components/NewsCard';
import { IArticleCard } from '@/interfaces/article';
import { ArticleType } from '@/constants/article';
import { nowToCreated } from '@/utils/time';

const Container = styled.div`
  //border: 1px solid #fff;
  margin-top: 45px;

  max-width: 960px;
`;

type ShowCaseBodyProps = {
  articleType: ArticleType;
  filteredArticle: IArticleCard[] | undefined;
};
const ShowCaseBody = ({ articleType, filteredArticle }: ShowCaseBodyProps) => {
  return (
    <Container>
      {filteredArticle?.map((article: IArticleCard) => {
        const { createdTime } = article;
        const date = nowToCreated(createdTime);
        return (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
          >
            {articleType === ArticleType.NEWS ? (
              <NewsCard article={{ ...article, date }} />
            ) : (
              <ReviewCard article={{ ...article, date }} />
            )}
          </Link>
        );
      })}
    </Container>
  );
};

export default ShowCaseBody;
