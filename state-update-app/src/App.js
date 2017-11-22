import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';

class App extends Component {
  render() {
    return (
      <div className="container top">
        <div className="jumbotron">
            <h1 className="display-3"> 
              <Clock /> 
            </h1>
            <p className="lead">This is a simple updating Clock, using state component of React.</p>
        </div>
      </div>
    );
  }
}

export default App;
