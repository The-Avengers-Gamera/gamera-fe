import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/LoginForm.module.scss';
import { IUserLogin } from '@/interfaces/user';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';

const LoginModal = () => {
  const initialState: IUserLogin = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const [formState, setFormState] = useState<IUserLogin>(initialState);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { email, password } = formState;

  const { loading, login } = useAuth();
  const { setModalIsOpen, changeDisplayLogInPopWindow } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((pre) => ({ ...pre, [name]: value }));
    setLoginError('');
    setBtnDisabled(false);
    if (name === 'email') {
      if (value.length === 0) {
        setEmailError('Email is required');
        setBtnDisabled(true);
      } else if (
        value.match(
          /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setEmailError('');
      } else {
        setEmailError('Email is not valid');
        setBtnDisabled(true);
      }
    }

    if (name === 'password') {
      if (value.length === 0) {
        setPasswordError('Password is required');
        setBtnDisabled(true);
      } else if (value.length > 1 && value.length < 8) {
        setPasswordError('Password is not valid');
        setBtnDisabled(true);
      } else if (/[A-Z]/.test(value) && !/^[A-Za-z]*$/.test(value)) {
        setPasswordError('');
      } else {
        setPasswordError('Password is not valid');
        setBtnDisabled(true);
      }
    }
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({ email, password });
      closeModal();
      navigate('/');
    } catch (err) {
      setLoginError('Email or password is not correct');
      setBtnDisabled(true);
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
              type="email"
              name="email"
              value={email}
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
              disabled={loading}
              onChange={handleChange}
            />
            <div className={styles.input_msg}>
              <p> {passwordError} </p>
            </div>
            <br />
            <div className={styles.input_msg}>
              <p> {loginError} </p>
            </div>
          </label>
          <br />
          <button
            type="submit"
            name="login"
            className={styles.login_btn}
            disabled={btnDisabled}
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

export default LoginModal;
