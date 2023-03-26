import styles from './index.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SETTINGS</h1>
      <div className={styles.settingsBox}>
        <div className={styles.userDetailBox}>
          <div className={styles.userDetailsLeft}>
            <div className={styles.userName}>Alice</div>
            <div className={styles.memberSince}>Member Since 2023</div>
          </div>
          <div className={styles.userDetailsRight}>
            <button
              className={styles.saveButton}
              type="submit"
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
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
