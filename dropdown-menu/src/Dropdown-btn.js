import React, {Component} from 'react';
import './dropdown.css';

class DropdownMenu extends Component{
    render(){
      return (
      <div>
      <h2>Dropdown Menu using Button</h2>
      <p>Move the mouse over the button to open the dropdown menu.</p>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        </div>
        </div>
      )
    }
  }

  export default DropdownMenu;