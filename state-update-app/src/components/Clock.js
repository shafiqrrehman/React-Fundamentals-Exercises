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
                {this.state.currentTime}
            </div>
        );
    }
}