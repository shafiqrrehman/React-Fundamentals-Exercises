import React, {Component} from 'react';

export default class Clock extends Component{
    render(){
        return(
            <div>
                {this.props.time}
                <p className="lead">This is a simple updating Clock, using state component of React.</p>
            </div>
        );
    }
}