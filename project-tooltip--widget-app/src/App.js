import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './components/Tooltip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tooltip Widget</h1>
          <div className="alignment">
          <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
          after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>
          The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
        </div>
        </header>
      </div>
    );
  }
}

export default App;
