import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/LoginForm.module.scss';
import { IUserLogin } from '@/interfaces/user';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';

function closeModal() {
  const modal = document.getElementById('id01');
  modal!.style.display = 'none';
  // window.location.reload();
}

const LoginForm = () => {
  const initialState: IUserLogin = {
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState<IUserLogin>(initialState);
  const { email, password } = formState;

  const { loading, login } = useAuth();
  const { changeDisplayLogInPopWindow } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password });
    closeModal();
  };

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
        onSubmit={handleSubmit}
      >
        <h1 className={styles.login_title}>LOGIN</h1>
        <div>
          <label htmlFor="email">
            <span className={styles.labels}> Email</span>
            <input
              className={styles.login_input}
              id="email"
              type="text"
              name="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </label>

          <label htmlFor="password">
            <span className={styles.labels}> Password</span>
            <input
              className={styles.login_input}
              type="password"
              name="password"
              value={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
              disabled={loading}
              onChange={handleChange}
            />
            <br />
          </label>
          <br />
          <button
            type="submit"
            className={styles.login_btn}
            disabled={loading}
          >
            Log In{loading && '...'}
          </button>
          <br />
          <input
            type="button"
            value="Forgot Password"
            className={styles.forgotPwd_btn}
          />
        </div>
        <div className="create-account ">
          <button
            type="button"
            className={styles.create_account_button}
            onClick={() => changeDisplayLogInPopWindow(false)}
          >
            Create a free account {'>'}
          </button>
        </div>
        <div className={styles.term_policy_box}>
          <Link to="/term">Term of Use</Link>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
