import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  return (
    <header className="Header-header">
      <div className="Header-title">HTT Timesheet</div>
      <div className="choices">
        <Link to="/" className="choice">
          <div className="login-choice">Login</div>
        </Link>
        <Link to="/timesheet" className="choice">
          <div className="timesheets-choice">Time Sheet</div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
