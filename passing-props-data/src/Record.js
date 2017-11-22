import React, {Component} from 'react';
import './dropdown.css';

class Record extends Component{
    render(){
        return(
            <div>
            <h2>Dropdown Menu using Button</h2>
            <p>Move the mouse over the button to open the dropdown menu for student information.</p>
            <div className="dropdown">
              <button className="dropbtn">Student Information</button>
              <div className="dropdown-content">
                <a>Name: <b>{this.props.Info.name}</b></a>
                <a>Age: <b>{this.props.Info.age}</b></a>
                <a>Grade: <b>{this.props.Info.grade}</b></a>
              </div>
              </div>
              </div>
        )
    }
}

export default Record;