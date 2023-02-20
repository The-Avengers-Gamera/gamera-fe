import ReactDOM from 'react-dom';
import styles from './css/loginForm.module.css';
import SignUpModal from '@/components/SignUpModal';

function closeModal() {
  const modal = document.getElementById('id01');
  modal.style.display = 'none';
  window.location.reload();
}

const createNewBtn = document.getElementById('id02');
// createNewBtn.addEventListener('click', () => {
//   return <SignUpModal />;
// });

const LoginForm = () => {
  return (
    <div
      className={styles.login_form_modal}
      id="id01"
    >
      <button
        type="button"
        className={styles.close_btn}
        aria-label="Close"
        onClick={closeModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <form
        className={styles.login_form}
        action=""
      >
        <h1 className={styles.login_title}>LOGIN</h1>
        <div>
          <label htmlFor="email">
            <span className={styles.labels}> Email</span>
            <input
              id="email"
              type="text"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onInvalid="this.setCustomValidity('Please Enter valid email')"
            />
          </label>

          <label htmlFor="password">
            <span className={styles.labels}> Password</span>
            <input
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
              onInvalid="this.setCustomValidity('Password is required')"
              onInput="this.setCustomValidity('')"
            />
            <br />
          </label>
          <br />
          <input
            type="submit"
            value="Log In"
            className={styles.login_btn}
          />
          <br />
          <input
            type="button"
            value="Forgot Password"
            className={styles.forgotPwd_btn}
          />
        </div>
        <div className={styles.create_account}>
          <span id="id02">Create a free account &gt;</span>
        </div>

        <div className={styles.term_policy_box}>
          <a
            href="https://www.ziffdavis.com/terms-of-use"
            target="_blank"
            rel="noreferrer"
          >
            Term of Use
          </a>
          <a
            href="https://www.ziffdavis.com/privacy-policy?refhost=ign.com"
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
