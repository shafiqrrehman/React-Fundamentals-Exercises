import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

let About = () => {
    return (
        <div>
            <a href="http://Node.University" target="_blank">Node.University</a>
            is home to top-notch Node education which brings joy to JavaScript engineers.
            <br />
            <br />
            <br />
            <br />
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contacts">Contact</Link>
        </div>
    );
}

export default About;