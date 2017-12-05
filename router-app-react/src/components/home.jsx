import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

let Home = () => {
    return (
        <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
            </ul>
            <hr />
            <h2>Home</h2>
        </div>
    );
}

export default Home;