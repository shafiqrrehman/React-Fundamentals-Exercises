import React, {Component} from 'react';

export default class ShowRecord extends Component {
    render() {
        return(
            <h2>{this.props.counter}</h2>
        );
    }
}