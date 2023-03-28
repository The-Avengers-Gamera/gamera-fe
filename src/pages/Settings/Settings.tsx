import { useEffect, useState } from 'react';
import { getUserInfo, updateUserById } from '@/services/user';
import styles from './index.module.css';
import { IUseDetailedInfo } from '@/interfaces/user';
import sleep from '@/utils/sleep';

type Form = {
  nameInput: string;
  pwdInput: string;
};
const SettingsPage = () => {
  const [userInfo, setUserInfo] = useState<IUseDetailedInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFail, setIsFail] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<'notActive' | 'succ' | 'fail'>('notActive');
  const [form, setForm] = useState<Form>({
    nameInput: '',
    pwdInput: '',
  });
  useEffect(() => {
    getUserInfo()
      .then((res) => {
        const { id, authorities, email, name, updatedTime } = res.data;
        setUserInfo({ id, authorities, email, name, updatedTime });
      })
      .catch(() => {
        // TODO: handle error
        setIsFail(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateUserInfo = () => {
    if (userInfo) {
      updateUserById(userInfo.id, {
        email: userInfo?.email,
        password: form.pwdInput,
        name: form.nameInput,
      })
        .then(() => {
          // TODO: handle result
          setIsUpdated('succ');
          sleep(5000).then(() => setIsUpdated('notActive'));
        })
        .catch(() => {
          // TODO: handle error
          setIsUpdated('fail');
          sleep(5000).then(() => setIsUpdated('notActive'));
        });
    } else {
      setIsUpdated('fail');
      sleep(5000).then(() => setIsUpdated('notActive'));
    }
  };
  return (
    <div className={styles.container}>
      {isUpdated === 'succ' && 'Updated successfully!'}
      {isUpdated === 'fail' && 'Updated fail!'}
      <h1 className={styles.header}>SETTINGS</h1>

      {loading && !isFail ? (
        'Loading...'
      ) : (
        <div className={styles.settingsBox}>
          <div className={styles.userDetailBox}>
            <div className={styles.userDetailsLeft}>
              <div className={styles.userName}>{userInfo?.name || 'Unknown'}</div>
              <div className={styles.memberSince}>
                Member Since {userInfo?.updatedTime.split('-')[0] || 'Unknown'}
              </div>
            </div>
            <div className={styles.userDetailsRight}>
              <button
                className={styles.saveButton}
                type="submit"
                onClick={updateUserInfo}
              >
                Save
              </button>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <label
                className={styles.label}
                htmlFor="nameInput"
              >
                <div>Name</div>
                <input
                  type="text"
                  id="nameInput"
                  className={styles.inputField}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, nameInput: e.target.value }));
                  }}
                />
              </label>
            </div>
            <div className={`${styles.inputBox} ${styles.right}`}>
              <label
                className={styles.label}
                htmlFor="passwordInput"
              >
                <div>Password</div>
                <input
                  type="password"
                  id="passwordInput"
                  className={styles.inputField}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, pwdInput: e.target.value }));
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
