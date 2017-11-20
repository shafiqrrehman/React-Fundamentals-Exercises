import React, {Component} from 'react';
import './../dropdown.css';

class Aligndropdown extends Component{
    render(){
        return ( <div>
                    <h2>Aligned Dropdown Content</h2>
<p>Determine whether the dropdown content should go from left to right or right to left with the left and right properties.</p>

<div className="dropdown align-left">
  <button className="dropbtn">Left</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<div className="dropdown align-right">
  <button className="dropbtn">Right</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
               </div>
        )
    }
}

export default Aligndropdown;
