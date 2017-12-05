import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

let Contact = () => {
    return (
        <div>
            <h3>Contact Us</h3>
            <input type="text" placeholder="your email" className="form-control"></input>
            <br />
            <textarea type="text" placeholder="your message" className="form-control"></textarea>
            <br />
            <button className="btn btn-primary">send</button>
            <br />
            <br />
            <br />
            <br />
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>
        </div>
    );
}

export default Contact;