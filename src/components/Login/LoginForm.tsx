import { useState } from 'react';
import styles from './css/LoginForm.module.scss';
import { IUserLogin } from '@/interfaces/user';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';

const loginModal = () => {
  const initialState: IUserLogin = {
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState<IUserLogin>(initialState);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const { email, password } = formState;

  const { loading, login } = useAuth();
  const { setModalIsOpen, changeDisplayLogInPopWindow } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((pre) => ({ ...pre, [name]: value }));
    setLoginError('');
    if (name === 'email') {
      if (value.length === 0) {
        setEmailError('Email is required');
      } else if (
        value.match(
          /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setEmailError('');
      } else {
        setEmailError('Email is not valid');
      }
    }

    if (name === 'password') {
      if (value.length === 0) {
        setPasswordError('Password is required');
      } else if (value.length > 1 && value.length < 8) {
        setPasswordError('Password is not valid');
      } else if (/[A-Z]/.test(value) && !/^[A-Za-z]*$/.test(value)) {
        setPasswordError('');
      } else {
        setPasswordError('Password is not valid');
      }
    }
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if .error.. return
    try {
      await login({ email, password });
      closeModal();
      window.location.href = '/';
    } catch (error) {
      setLoginError('Email or password is not correct');
      console.log('Login Error', error);
    }
  };

  return (
    <div
      className={styles.wrapper}
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
            <div className={styles.input_msg}>
              <p> {emailError} </p>
            </div>
          </label>

          <label htmlFor="password">
            <span className={styles.labels}> Password</span>
            <input
              className={styles.login_input}
              type="password"
              name="password"
              value={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              disabled={loading}
              onChange={handleChange}
            />
            <div className={styles.input_msg}>
              <p> {passwordError} </p>
              <p> {loginError} </p>
            </div>
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
          <a href="/term">Term of Use</a>
          <a href="/privacy">Privacy policy</a>
        </div>
      </form>
    </div>
  );
};

export default loginModal;
