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
      timeOut7: '',
      show: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeLeft = this.changeLeft.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  //handle input change function for timesheet form
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  // open and close modal by changing state functions
  closeModal(e) {
    if (e.target.id !== 'content' && e.target.id !== 'button') {
      console.log(e.target);
      this.setState({
        show: false
      });
    }
  }
  openModal() {
    this.setState({
      show: true
    });
  }

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
    //days to be used in map function rendering days
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
                  return (
                    <div key={key} className="day">
                      <div className="d">{day}</div>
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
                return (
                  <div key={key} className="day">
                    <div>{day}</div>
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

            <div className="column">
              <div className="column-header">Lunch In</div>
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
              <div className="column-header">Lunch Out</div>
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
          <div className="button-container">
            <button className="submit-button" onClick={this.openModal}>
              Submit
            </button>
          </div>
        </div>
        {this.state.show && (
          <div className="modal-container" onClick={this.closeModal}>
            <div ref="content" className="modal-content" id="content">
              Clicking submit confirms your e-signature and that this document
              contains accurate information.
              <div className="button-container">
                <button className="submit-button" onClick={this.closeModal}>
                  Submit Timesheet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TimeSheet;
