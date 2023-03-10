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
  const { email, password } = formState;

  const { loading, login } = useAuth();
  const { setModalIsOpen, changeDisplayLogInPopWindow } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((pre) => ({ ...pre, [name]: value }));
  };

  function closeModal() {
    setModalIsOpen(false);
    // window.location.href = '/';
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password });
    closeModal();
  };

  // function inputValidation((in: string)){
  //   if(in = ''){
  //     return "user is empty"
  //   }
  // }

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
          <a href="/term">Term of Use</a>
          <a href="/privacy">Privacy policy</a>
        </div>
      </form>
    </div>
  );
};

export default loginModal;
