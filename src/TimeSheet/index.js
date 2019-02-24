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
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
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
                    <div className="d">{day}</div>
                    <div className="t">{today}</div>
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
                  <div className="day">
                    <input key={key} value={job} onChange={null} />;
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
