import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
const Login = () => {
  //add register button to register page
  return (
    <div className="wrapper">
      <form className="login">
        <p className="title">Log in</p>
        <input type="text" placeholder="Email" autoFocus />
        <input type="password" placeholder="Password" />
        <a href="/project">Don't have an account? Register now.</a>
        <button>
          <Link className="state" to="/timesheet">
            Log in
          </Link>
        </button>
      </form>
    </div>
  );
};
export default Login;
