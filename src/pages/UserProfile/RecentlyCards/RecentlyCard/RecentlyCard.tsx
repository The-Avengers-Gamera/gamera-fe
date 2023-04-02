import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styles from './index.module.css';
import { IArticleCard } from '@/interfaces/article';

type CardProps = {
  article: IArticleCard;
};

const RecentlyCard = ({ article }: CardProps) => {
  const articleCard = (
    <div
      key={article.id}
      className={styles.cardBox}
    >
      <div className={styles.cover}>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <img
            src={article.coverImgUrl}
            alt=""
          />
        </a>
      </div>
      <div className={styles.articleInfo}>
        <div className={styles.titleContainer}>
          <span>{article.title}</span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.commentsContainer}>
            <div className={styles.commentsIcon}>
              <ChatRoundedIcon style={{ fontSize: '14px' }} />
            </div>
            <span>{article.commentNum}</span>
          </div>
          <div className={styles.likesContainer}>
            <div className={styles.likesIcon}>
              <FavoriteRoundedIcon style={{ fontSize: '14px' }} />
            </div>
            <span>{article.likeCount}</span>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );

  return <div>{articleCard}</div>;
};

export default RecentlyCard;
