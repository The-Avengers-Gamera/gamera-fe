import { useState, useContext } from 'react';
import { isAxiosError } from 'axios';
import styles from './css/loginForm.module.scss';
import { RootContext } from '@/layouts/Root';
import { IUserLogin } from '@/interfaces/user';
import { login } from '@/services/user';

function closeModal() {
  const modal = document.getElementById('id01');
  modal!.style.display = 'none';
  window.location.reload();
}

interface ILoginState extends IUserLogin {
  isLoading: boolean;
  error: string;
}

const LoginForm = () => {
  const initialState: ILoginState = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
  };

  const [formState, setFormState] = useState<ILoginState>(initialState);

  const { email, password, isLoading, error } = formState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO extract this to hooks or authentication context
    try {
      setFormState((pre) => ({ ...pre, isLoading: true }));
      const { status, headers, data: user } = await login({ email, password });
      if (status === 200) {
        const token = headers.authorization;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        closeModal();
      }
    } catch (err) {
      // TODO handle login error
      if (isAxiosError(err)) {
        if (err?.response?.status === 401) {
          setFormState((pre) => ({ ...pre, error: 'login failed' }));
        }
      }
    } finally {
      setFormState((pre) => ({ ...pre, isLoading: false }));
    }
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
        action=""
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
              disabled={isLoading}
              // onInvalid="this.setCustomValidity('Please Enter valid email')"
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
              disabled={isLoading}
              onChange={handleChange}
              // onInvalid="this.setCustomValidity('Password is required')"
              // onInput="this.setCustomValidity('')"
            />
            <br />
          </label>
          <br />
          <button
            type="submit"
            className={styles.login_btn}
            disabled={isLoading}
          >
            Log In{isLoading && '...'}
          </button>
          <br />
          <input
            type="button"
            value="Forgot Password"
            className={styles.forgotPwd_btn}
          />
        </div>
        <RootContext.Consumer>
          {(value) => (
            <div className="create-account ">
              <button
                type="button"
                className={styles.create_account_button}
                onClick={(event) => {
                  value.changeDisplayLogInPopWindow(event, false);
                }}
              >
                Create a free account {'>'}
              </button>
            </div>
          )}
        </RootContext.Consumer>

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
