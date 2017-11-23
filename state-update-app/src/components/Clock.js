import React, {Component} from 'react';

export default class Clock extends Component{

    constructor(){
        super();
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString()}
    }

    launchClock(){
        setInterval(()=>{
            console.log("Updating time...");
            this.setState({
                currentTime: (new Date()).toLocaleString()
            });
        }, 1000);
    }

    render(){
        return(
            <div>
                <h1>Current Time using React State:</h1>
                {this.state.currentTime}
                <p className="lead">This is a simple updating Clock, using state component of React.</p>
            </div>
        );
    }
}