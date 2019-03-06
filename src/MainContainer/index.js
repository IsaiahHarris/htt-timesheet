import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import TimeSheet from '../TimeSheet';
import './MainContainer.scss';
const MainContainer = () => {
  return (
    <div className="main-container">
      {/* switch routes for pages */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/timesheet" component={TimeSheet} />
      </Switch>
    </div>
  );
};
export default MainContainer;
