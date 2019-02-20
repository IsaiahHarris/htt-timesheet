import React, { Component } from 'react';
import './TimeSheet.scss';
class TimeSheet extends Component {
  render() {
    return (
      <div className="timesheet-container">
        <div className="header">timesheet header</div>
        <div className="columns">
          <div className="dow-col">
            <div className="dow-header">dow header</div>
          </div>
          <div className="jp-col">
            <div className="jp-header">jp header</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSheet;
