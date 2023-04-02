import { useState } from 'react';
import styles from './index.module.css';
import RecentlyCard from './RecentlyCard/RecentlyCard';
import { IArticleCard } from '@/interfaces/article';

type ItemType = {
  coverUrl: string;
  title: string;
  commNum: string;
  likeNum: string;
};

type Props = {
  columnName: string;
  isEditor: boolean;
  articles?: Set<IArticleCard>;
};

const initialState: ItemType[] = [];

const mockLikeItem = {
  coverUrl:
    'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
  title: 'The Last Of Us Part 1 Review',
  commNum: '2.6K',
  likeNum: '10,311',
};
for (let i = 0; i < 3; ) {
  initialState.push(structuredClone(mockLikeItem));
  mockLikeItem.title = `The Last Of Us Part 1 Review ${i}`; // mock data: make title unique
  i += 1;
}

const RecentlyCards = ({ columnName, isEditor, articles }: Props) => {
  const [cards] = useState(Array.from(articles || []));
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
      {cards.map((article) => (
        <RecentlyCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

export default RecentlyCards;
