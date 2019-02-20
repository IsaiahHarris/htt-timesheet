import React, { Component } from 'react';
import './TimeSheet.scss';
class TimeSheet extends Component {
  render() {
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thurday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    let jobs = [
      'Enter Project',
      'Enter Project',
      'Enter Project',
      'Enter Project',
      'Enter Project',
      'Enter Project',
      'Enter Project'
    ];
    return (
      <div className="timesheet-container">
        <div className="header">Timesheet header</div>
        <div className="columns">
          <div className="dow-col">
            <div className="dow-header">dow header</div>
            <div className="days">
              {days.map((day, key) => {
                return (
                  <div key={key} className="day">
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="jp-col">
            <div className="jp-header">jp header</div>
            <div className="days">
              {jobs.map((job, key) => {
                return (
                  <div key={key} className="day">
                    {job}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSheet;
