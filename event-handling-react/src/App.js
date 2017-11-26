import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/Field.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Color Change Field using React's State and Event</h1>
          <Field />
        </header>
      </div>
    );
  }
}

export default App;
