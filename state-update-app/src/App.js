import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';
import Counter from './components/Counter.js';

class App extends Component {
  render() {
    return (
      <div className="container top">
        <div className="jumbotron">
            <h1 className="display-3">
              <Clock />
            </h1>
            <Counter />
        </div>
      </div>
    );
  }
}

export default App;
