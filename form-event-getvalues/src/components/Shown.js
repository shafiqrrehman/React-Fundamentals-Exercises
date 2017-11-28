import React, {Component} from 'react';


export default class Shown extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.values.name}</p>
                <p>{this.props.values.password}</p>
            </div>
        );
    }
}