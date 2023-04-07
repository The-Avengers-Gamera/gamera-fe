import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styles from './index.module.css';
import { IArticleCard } from '@/interfaces/article';

interface RecentlyCardProps {
  article: IArticleCard;
}

const RecentlyCard = ({
  article: { id, coverImgUrl, title, commentNum, likeNum },
}: RecentlyCardProps) => {
  const articleCard = (
    <div
      key={id}
      className={styles.cardBox}
    >
      <div className={styles.cover}>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <img
            src={coverImgUrl}
            alt=""
          />
        </a>
      </div>
      <div className={styles.articleInfo}>
        <div className={styles.titleContainer}>
          <span>{title}</span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.commentsContainer}>
            <div className={styles.commentsIcon}>
              <ChatRoundedIcon style={{ fontSize: '14px' }} />
            </div>
            <span>{commentNum}</span>
          </div>
          <div className={styles.likesContainer}>
            <div className={styles.likesIcon}>
              <FavoriteRoundedIcon style={{ fontSize: '14px' }} />
            </div>
            <span>{likeNum}</span>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );

  return <div>{articleCard}</div>;
};

export default RecentlyCard;
