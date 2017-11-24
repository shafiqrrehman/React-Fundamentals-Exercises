import React, {Component} from 'react';

export default class Counter extends Component {

    render(){
        return(
            <div>
                <h1 className="display-3">Counter React State:</h1>
                <h2 className="display-3">{this.props.counter}</h2>
            </div>
        );
    }
}