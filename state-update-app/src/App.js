import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';

class App extends Component {
  render() {
    return (
      <div className="container top">
        <div className="jumbotron">
            <Clock />
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
      </div>
    );
  }
}

export default App;
