import React, { Component } from 'react';
import Header from '../Header';
import './App.scss';
import MainContainer from '../MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
