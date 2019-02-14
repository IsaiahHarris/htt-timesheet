import React from 'react';
import './Login.scss';
const Login = () => {
  return (
    <div className="wrapper">
      <form className="login">
        <p className="title">Log in</p>
        <input type="text" placeholder="Username" autoFocus />
        <input type="password" placeholder="Password" />
        <a href="/project">Don't have an account? Register now.</a>
        <button>
          <a href="/timesheet" className="state">
            Log in
          </a>
        </button>
      </form>
    </div>
  );
};
export default Login;
