import React, { Component } from 'react';
import './TimeSheet.scss';
class TimeSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobInput1: '',
      jobInput2: '',
      jobInput3: '',
      jobInput4: '',
      jobInput5: '',
      jobInput6: '',
      jobInput7: '',
      timeIn1: '',
      timeIn2: '',
      timeIn3: '',
      timeIn4: '',
      timeIn5: '',
      timeIn6: '',
      timeIn7: '',
      timeOut1: '',
      timeOut2: '',
      timeOut3: '',
      timeOut4: '',
      timeOut5: '',
      timeOut6: '',
      timeOut7: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeLeft = this.changeLeft.bind(this);
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  changeLeft() {
    let pickDay = document.getElementById('pickDay');
    pickDay.className = 'pickDay';
    let pickTime = document.getElementById('pickTime');
    pickTime.className = 'pickTimeHidden';
  }
  changeRight() {
    let pickDay = document.getElementById('pickDay');
    pickDay.className = 'pickDayHidden';
    let pickTime = document.getElementById('pickTime');
    pickTime.className = 'pickTime';
  }
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

    let shortDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
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
        <div className="header">
          <div className="title">Timesheet</div>
          <i
            className="fas fa-arrow-right"
            id="right-arrow"
            ref="right-arrow"
            onClick={this.changeRight}
          />
          <i
            className="fas fa-arrow-left"
            id="left-arrow"
            ref="left-arrow"
            onClick={this.changeLeft}
          />
        </div>
        <div className="pickDay" id="pickDay">
          <div className="columns">
            <div className="dow-col">
              <div className="dow-header">Day</div>
              <div className="days">
                {days.map((day, key) => {
                  if (mm === '02') {
                    if (dd + key <= 28) {
                      dd += key;
                    } else {
                      mm = '03';
                      dd = 0;
                    }
                  }
                  let marchKey = 1;
                  if (mm === '03') {
                    if (dd + marchKey <= 31) {
                      dd += marchKey;
                    }
                  }
                  return (
                    <div key={key} className="day">
                      <div className="d">{day}</div>
                      <div className="t">{mm + '/' + `${dd}` + '/' + yyyy}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="jp-col">
              <div className="jp-header">Project</div>
              <div className="days">
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput1')}
                    value={this.state.jobInput1}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput2')}
                    value={this.state.jobInput2}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput3')}
                    value={this.state.jobInput3}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput4')}
                    value={this.state.jobInput4}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput5')}
                    value={this.state.jobInput5}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput6')}
                    value={this.state.jobInput6}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
                <div className="day">
                  <select
                    onChange={this.handleInputChange('jobInput7')}
                    value={this.state.jobInput7}
                    className="select"
                  >
                    <option>01 - Par Hawaii Refinery West</option>
                    <option>02 - Par Hawaii Refinery East</option>
                    <option>03 - Island Energy Services</option>
                    <option>04 - HECO</option>
                    <option>05 - Hawaii Gas</option>
                    <option>06 - Aloha Petroleum</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pickTimeHidden" id="pickTime">
          <div className="columns">
            <div className="column-day">
              <div className="column-header">Day</div>
              {shortDays.map((day, key) => {
                if (mm === '02') {
                  if (dd + key <= 28) {
                    dd += key;
                  } else {
                    mm = '03';
                    dd = 0;
                  }
                }
                let march = 1;

                if (mm === '03') {
                  if (dd + march <= 31) {
                    dd += march;
                  }
                }
                return (
                  <div key={key} className="day">
                    <div>{day}</div>
                    <div>{mm + '/' + `${dd}`}</div>
                  </div>
                );
              })}
            </div>

            <div className="column">
              <div className="column-header">Time In</div>
              {shortDays.map((day, key) => {
                return (
                  <div key={key} className="day">
                    <input
                      className="timeInInput"
                      type="text"
                      onChange={this.handleInputChange('timeIn1')}
                    />
                  </div>
                );
              })}
            </div>
            <div className="column">
              <div className="column-header">Time out</div>
              {shortDays.map((day, key) => {
                return (
                  <div key={key} className="day">
                    <input
                      className="timeOutInput"
                      type="text"
                      onChange={this.handleInputChange('timeOut1')}
                    />
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
