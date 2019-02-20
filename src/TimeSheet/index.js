import React, { Component } from 'react';
import config from '../config';
class TimeSheet extends Component {
  constructor(props) {
    super(props);

    this.initClient = this.initClient.bind(this);
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load('client', this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        // load(this.onLoad);
      });
  };
  render() {
    return <div />;
  }
}

export default TimeSheet;
