import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styles from './index.module.css';

type CardProps = {
  coverUrl: string;
  title: string;
  commNum: string;
  likeNum: string;
};

const RecentlyCards = ({ coverUrl, title, commNum, likeNum }: CardProps) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cover}>
        {/* fake href */}
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <img
            src={coverUrl}
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
            <span>{commNum}</span>
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
};

export default RecentlyCards;
