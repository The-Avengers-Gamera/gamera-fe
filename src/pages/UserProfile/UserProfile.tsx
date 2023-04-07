import { useState, useEffect } from 'react';
import styles from './index.module.css';
import userIcon from './assets/icon.svg';
import RecentlyCards from './RecentlyCards/RecentlyCards';
import { IUserProfile } from '@/interfaces/user';
import { getUserProfile } from '@/services/user';
import useAuth from '@/context/auth';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const {
    auth: { isEditor, user },
  } = useAuth();
  const userId = user?.id;

  useEffect(() => {
    let isCancelled = false;

    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile(userId);
        if (!isCancelled) {
          setUserProfile(response.data);
          setIsLoading(false);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(
            err instanceof Error ? err : new Error('An error occurred while fetching user profile')
          );
          setIsLoading(false);
        }
      }
    };

    fetchUserProfile();

    return () => {
      isCancelled = true;
    };
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !userProfile) {
    return <div>Error loading user profile</div>;
  }

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
          <div className={styles.userName}>{userProfile.name}</div>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.userDetails}>
            <p className={styles.detailNumber}>{userProfile.likesCount} </p>
            <p className={styles.detailCategory}>LIKES</p>
          </div>
          <div className={styles.userDetails}>
            <p className={styles.detailNumber}>{userProfile.commentsCount}</p>
            <p className={styles.detailCategory}>COMMENTS</p>
          </div>
          {isEditor && (
            <div className={styles.userDetails}>
              <p className={styles.detailNumber}>{userProfile.postsCount}</p>
              <p className={styles.detailCategory}>POSTS</p>
            </div>
          )}
        </div>
      </div>
      <h1 className={styles.title}>RECENTLY</h1>
      <div className={styles.recentlyContainer}>
        <RecentlyCards
          columnName="Likes"
          articles={userProfile.likesArticles}
        />
        <RecentlyCards
          columnName="Comments"
          articles={userProfile.commentsArticles}
        />
        {isEditor && (
          <RecentlyCards
            columnName="Posts"
            articles={userProfile.postsArticles}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
