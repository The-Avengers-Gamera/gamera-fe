import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import RecentlyCard from './RecentlyCard/RecentlyCard';

type ItemType = {
  coverUrl: string;
  title: string;
  commNum: string;
  likeNum: string;
};

type Props = {
  columnName: string;
  columnLink: string;
  isEditor: boolean;
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

const RecentlyCards = ({ columnName, columnLink, isEditor }: Props) => {
  const [cards] = useState(initialState);
  const navigate = useNavigate();

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
        <span className={styles.viewMore}>
          <Link to={columnLink}>VIEW MORE</Link>
        </span>
      </div>
      {cards.map(({ coverUrl, title, commNum, likeNum }) => {
        return (
          <RecentlyCard
            coverUrl={coverUrl}
            title={title}
            commNum={commNum}
            likeNum={likeNum}
          />
        );
      })}
    </div>
  );
};

export default RecentlyCards;
