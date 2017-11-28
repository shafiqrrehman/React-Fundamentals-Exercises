import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Event Handling React</h1>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
