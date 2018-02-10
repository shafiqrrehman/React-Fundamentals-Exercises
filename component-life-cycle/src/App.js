import React, { Component } from 'react';
import Content from './Content';
import './App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: 0
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      data: this.state.data + 1
    });
  }

  render() {

    let { data } = this.state;

    return (
      <div className="App">
          <h1 style={{textAlign: 'center'}}>Welcome to React Component's Life-Cycle</h1>
          <button onClick={this.increment}>Increment</button>
          <Content myNumber = { data } />
      </div>
    );
  }
}

export default App;
