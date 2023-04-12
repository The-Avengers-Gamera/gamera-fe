import useAuth from '@/context/auth';
import styles from './index.module.css';
import RecentlyCard from './RecentlyCard/RecentlyCard';
import { IArticleCard } from '@/interfaces/article';

interface RecentlyCardsProps {
  columnName: string;
  articles?: IArticleCard[];
}

const RecentlyCards = ({ columnName, articles }: RecentlyCardsProps) => {
  const {
    auth: { isEditor },
  } = useAuth();

  const getContainerClass = () => {
    if (isEditor) {
      return styles.editorContainer;
    }
    return styles.normalContainer;
  };
  return (
    <div className={`${getContainerClass()}`}>
      <div className={styles.columnTitle}>
        <span className={styles.columnName}>{columnName}</span>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <span className={styles.viewMore}>VIEW MORE</span>
        </a>
      </div>
      {articles?.map((article) => (
        <RecentlyCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

export default RecentlyCards;
