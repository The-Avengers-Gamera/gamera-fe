import styles from './index.module.css';
import userIcon from './assets/icon.svg';
import RecentlyCards from './RecentlyCards/RecentlyCards';

type userProps = {
  isEditor: boolean;
  name: string;
  numLikes: number;
  numComments: number;
  numPosts: number;
};

const isEditor = true;
const userProps = {
  name: 'Alice',
  numLikes: 0,
  numComments: 0,
  numPosts: 0,
};

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>USER PROFILE</h1>
      <div className={styles.infoBox}>
        <div className={styles.infoLeft}>
          <div className={styles.userImage}>
            <img
              src={userIcon}
              alt="profile icon"
            />
          </div>
          <div className={styles.userName}>{userProps.name}</div>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.userDetails}>
            <p className={styles.detailNumber}>{userProps.numLikes} </p>
            <p className={styles.detailCategory}>LIKES</p>
          </div>
          <div className={styles.userDetails}>
            <p className={styles.detailNumber}>{userProps.numComments}</p>
            <p className={styles.detailCategory}>COMMENTS</p>
          </div>
          {isEditor && (
            <div className={styles.userDetails}>
              <p className={styles.detailNumber}>{userProps.numPosts}</p>
              <p className={styles.detailCategory}>POSTS</p>
            </div>
          )}
        </div>
      </div>
      <h1 className={styles.title}>RECENTLY</h1>
      <div className={styles.recentlyContainer}>
        <RecentlyCards
          columnName="Likes"
          isEditor={isEditor}
        />
        <RecentlyCards
          columnName="Comments"
          isEditor={isEditor}
        />
        {isEditor && (
          <RecentlyCards
            columnName="Posts"
            isEditor={isEditor}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
