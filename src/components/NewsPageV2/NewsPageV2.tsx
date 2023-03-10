import TrendingNews from './components/TrendingNews/TrendingNews';
import ArticlesShowCase from '../ArticlesShowCase';
import { EArticleType } from '@/constants/article';

const articleType = EArticleType.NEWS;

const NewsPageV2 = () => {
  return (
    <div>
      <TrendingNews />
      <ArticlesShowCase articleType={articleType} />
    </div>
  );
};

export default NewsPageV2;
