import React, {Component} from 'react';


export default class Shown extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.values.name}</h1>
                <h1>{this.props.values.password}</h1>
            </div>
        );
    }
}