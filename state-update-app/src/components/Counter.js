import React, {Component} from 'react';

export default class Counter extends Component {

    constructor(){
        super();
        this.launchCounter()
        this.state = {counterUpdate: 1}
    }

    launchCounter(){
        setInterval(()=> {
            this.setState({
                counterUpdate: this.state.counterUpdate + 1
            });
        }, 1000);
    }


    render(){
        return(
            <div>
                <h1 className="display-3">Counter React State:</h1>
                <h2 className="display-3">{this.state.counterUpdate}</h2>
            </div>
        );
    }
}