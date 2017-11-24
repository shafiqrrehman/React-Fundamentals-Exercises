import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js';
import Counter from './components/Counter.js';
import Analog from './components/Analog.js';

class App extends Component {

  constructor(){
    super();
    this.launchClock()
    this.state = {currentTime: (new Date()).toLocaleString()}
    this.launchCounter()
    this.state = {counterUpdate: 1}
    
}

launchClock(){
    setInterval(()=>{
        this.setState({
            currentTime: (new Date()).toLocaleString()
        });
    }, 1000);
}

launchCounter(){
  setInterval(()=> {
      this.setState({
          counterUpdate: this.state.counterUpdate + 1
      });
  }, 1000);
}
 
  render() {
    return (
      <div className="container top">
        <div className="jumbotron">
        <h1>Analog and Digital clock:</h1>
        <br />
        <Analog time={this.state.currentTime} />
            <br />
            <h2>
              <Clock time={this.state.currentTime} />
            </h2>
            <Counter counter={this.state.counterUpdate} />
            
        </div>
      </div>
    );
  }
}

export default App;
