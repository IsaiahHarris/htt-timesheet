import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  //header component, would like to add more functionality
  return (
    <header className="Header-header">
      <img className="logo" src={require('../assets/HTT.png')} alt="" />
      <div className="Header-title">Timesheet</div>
      <div className="choices">
        {/* two link choices for now */}
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
