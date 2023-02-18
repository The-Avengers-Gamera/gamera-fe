/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './css/loginFom.css';

const modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const Loginform = () => (
  <div
    className="login-form-modal"
    id="id01"
  >
    <form
      className="login-form animate"
      action=""
    >
      <div>
        <span
          onClick="document.getElementById('id01').style.display='none'"
          className="close"
          title="Close Modal"
        >
          &times;
        </span>

        <h1 className="login-title">LOGIN</h1>
        <div className="container">
          <label className="labels">
            Email
            <br />
          </label>
          <input
            type="text"
            name="email"
            className="login-box"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onInvalid="this.setCustomValidity('Please Enter valid email')"
          />
          <br />
          <label className="labels">
            Password
            <br />
          </label>
          {/* password" that must contain 6 or more characters that are of at least one number, and one uppercase and lowercase letter: */}
          <input
            type="password"
            name="password"
            className="login-box"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            required
            onInvalid="this.setCustomValidity('Password is required')"
            onInput="this.setCustomValidity('')"
          />
          <br />
          <input
            type="submit"
            value="Log In"
            className="login-btn"
          />
          <br />
          <input
            type="button"
            value="Forgot Password"
            className="forgotPwd-btn"
          />
        </div>
        <div className="create-account ">
          <a href="#"> Create a free account &gt; </a>
        </div>

        <div className="term-policy-box">
          <a href="#"> Term of Use</a>
          <a href="#"> Privacy policy</a>
        </div>
      </div>
    </form>
  </div>
);

export default Loginform;
