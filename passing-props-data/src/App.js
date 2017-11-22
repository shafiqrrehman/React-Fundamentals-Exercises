import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Record from './Record.js';

class App extends Component {
  render() {

    let studentInfo = {name: "Wayn", age: 26, grade: "O-Level"};
    let variab = "abc";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Record Info = {studentInfo} />
        </header>
      </div>
    );
  }
}

export default App;
