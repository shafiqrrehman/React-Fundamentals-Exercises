import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    let usrDetails = {
      name: "Benzema",
      profession: "Footballer",
      hobbies: ["Traveling", "Cars", "Golf"],
      url: "https://www.101greatgoals.com/wp-content/uploads/2016/06/karim-benzema-with-champions-league-2016.jpg"
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Header />       
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home name="Wayn Baloch" age={24} player={usrDetails} />       
          </div>
        </div>
      </div>
    );
  }
}

export default App;
